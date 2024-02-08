# HOMEWORK

Full list of homework for the course `Advanced JavaScript`. Each homework is divided into 3 parts: `Basic`, `Medium`
and `Advanced`.

## Homework 1

### Basic

Place the JSON cars.json to your GitHub repository. Use the `fetch` method to get the data from the server. Display the
cars data in a table.

### Medium

Add inputs to filter the data:

- By type (input type: select)
- By brand (input type: select)

Add a search button. When clicked the table should be filtered by the selected filters.

### Advanced

Add these additional inputs:

- By model (input type: text input)
- By doors (input type: number input)
- By gasType (input type: select)
- By color (input type: text OR select)
- By new/old (input type: radio or checkbox) - you are free to choose the input type and the way you want to display the
  data (just new, just old, both, etc.)
- By horsepower (input type: number, range input) - you are free to choose the input type and the way you want to
  display the data (exact value, up to value, etc.)

Make sure all filters are working together. When a filter is selected, it should be considered in the filtering process.

Example: if I select `BMW` from the brand filter, the table should be filtered by the selected brand. If I select `BMW`
and color `white`, the table should be filtered by the selected brand and color.

### Bonus:

1. Add a button `Reset filters` to reset the table to its initial state (before any filtering was applied), and reset
   all filter inputs to default values.
2. If no data is found, display a message `No data found` instead of the table.
3. Use partial searching for the text inputs. Example: if I type `ol` in the model input, the table should be filtered
   by all cars that have `ol` in their model name (polo, volvo, etc.).


