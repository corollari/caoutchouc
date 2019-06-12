# caoutchouc

> Markdown for formatting + AsciiMath for math + Latex for the weird stuff

## Examples
```
# Header
This is a basic equation €1+2*sqrt(2)-pi+alpha/(3.2-1)€  
More complex things can be done with latex:
$$x\overset{\Bbb{R}}{+} y=x\overset{\Bbb{Q}}{+} y$$
```
Also, it automatically includes several latex libraries such as `amsmath`.

Created as dog food for myself cause I hate latex, use at your own risk.

## Implementation
### Regexps
Algorithm:
1. Apply regexes to transform markdown constructs to latex ones
2. Transform asciiMath to latex

Pros:
- You can include latex code in your document by just adding it straight away

Cons:
- Many edge cases won't work (eg: elements inside comments won't be transformed properly)

### Parser based on pandoc
Algorithm:
1. Convert new elements (€...€) to md blocks
2. Parse markdown using pandoc
3. Modify pandoc's internal representation of the text to apply the changes needed (including the transformation from asciiMath to latex)
4. Transform it into the output format using pandoc

Pros:
- Should be more stable, as pandoc is a proper parser

Cons:
- Will require all latex code to be properly encapsulated
- Further development will be harder

## Acknowledgements
- pandoc
- The code used to convert asciimath to latex was taken from [here](https://github.com/asciimath/asciimathml/blob/master/asciimath-based/ASCIIMathTeXImg.js). For more information check the License text in `ASCIIMathTeXImg.js`.

