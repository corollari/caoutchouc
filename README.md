# caoutchouc

> Markdown for formatting + AsciiMath for math + Latex for the weird stuff

## Install
```
npm install -g caou
```

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
Algorithm:
1. Convert new elements (€...€) to md blocks
2. Parse markdown using pandoc
3. Modify pandoc's internal representation of the text to apply the changes needed (including the transformation from asciiMath to latex)
4. Transform it into the output format using pandoc

## Acknowledgements
- pandoc
- The code used to convert asciimath to latex was taken from [here](https://github.com/asciimath/asciimathml/blob/master/asciimath-based/ASCIIMathTeXImg.js). For more information check the License text in `ASCIIMathTeXImg.js`.

