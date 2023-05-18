package main

import (
	"embed"
	"fmt"
	"syscall/js"

	hs "github.com/datahookinc/hookscript"
)

//go:embed assets/cars.csv
var content embed.FS

func main() {

	js.Global().Set("RunScript", RunScript())

	// Prevent the application from ending
	select {}
}

func RunScript() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		// The function receives the promise's (res, rej) arguments
		handler := js.FuncOf(func(this js.Value, promiseArgs []js.Value) interface{} {

			res := promiseArgs[0]
			rej := promiseArgs[1]

			// index out of range with length 0
			if len(args) != 1 {
				rej.Invoke("Invalid number of arguments passed to function")
			}

			script := args[0].String()
			rt, err := hs.NewRuntime(script, []string{hs.OPERATOR_INPUT_MDE, hs.OPERATOR_INPUT_FILE, hs.OPERATOR_TRANFORM, hs.OPERATOR_OUTPUT_DATASET}, &content)
			if err != nil {
				rej.Invoke(fmt.Sprintf("Error creating runtime: %s", err))
				return nil
			}

			rt.OnError = func(err error) {
				rej.Invoke(fmt.Sprintf("Error when reading data: %s", err))
			}

			n := 0
			values := make(map[string]any)
			data := []any{}

			rt.OnData = func(dataChan <-chan []interface{}, attributes []string, dtypes []hs.AttributeDataType) {

				attr := make([]interface{}, len(attributes))
				for i, a := range attributes {
					attr[i] = a
				}

				values["attributes"] = attr

				dt := make([]interface{}, len(dtypes))
				for i, d := range dtypes {
					dt[i] = int(d)
				}

				values["dtypes"] = dt

				// values["dTypes"] = dtypes
				for v := range dataChan {
					n++
					data = append(data, v)
				}
				values["data"] = data
			}

			go func() {
				rt.Run() // this is a blocking operation
				if rt.Error == nil {
					res.Invoke(values)
				}
			}()

			return nil
		})

		promiseConstructor := js.Global().Get("Promise")
		return promiseConstructor.New(handler)
	})
}
