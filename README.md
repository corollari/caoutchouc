# caoutchouc

> Markdown for formatting + AsciiMath for math + Latex for the weird stuff

## What is caoutchouc?
A replacement for LaTeX based on Markdown and AsciiMath.

## Why use caoutchouc?
Here's the same document written in both LaTeX and Caouthcouc:

| LaTeX                                                                                                                                                                                                                                                                                                                                         | Caouthcouc                                                                 |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| \documentclass{article}<br> \usepackage[utf8]{inputenc}<br> \begin{document}<br> <br>     \section{Introduction}<br> <br>     $$\dfrac{1\cdot \alpha}{2}$$<br> <br>     \begin{figure}<br>         \centering<br>         \includegraphics[width=9cm]{image}<br>         \caption{A caption}<br>     \end{figure}<br> <br> \end{document}<br> | # Introduction<br> <br> €€(1*alpha)/2€€<br> <br> `![A caption](image.png)` |

It's easy to see that the Caouthcouc version is much more **readable**, **easy**, **simple** and **less verbose**.

For a detailed explanation of the improvements that Caouchouc brings over LaTeX, read <https://caoutchouc.io/#why-was-it-created>.

## Install
```
npm install -g caou
```

## Usage
```
caou file.md # Generates file.pdf
```

For more information about the `caou` compiler, run `man caou`.

If you'd like to find out more about caoutchouc, go to <https://caoutchouc.io>.

## Caoutchouc example
```
# Header
This is a basic equation €1+2*sqrt(2)-pi+alpha/(3.2-1)€  
More complex things can be done with latex:
$$x\overset{\Bbb{R}}{+} y=x\overset{\Bbb{Q}}{+} y$$
```
Also, it automatically includes several latex libraries such as `amsmath`.

Go to <https://caoutchouc.io> for proper documentation.

## Contributing
All contributions are welcome but help is specially appreciated in the following tasks:
- [ ] Set up scalable hosting for [ShareCaou](https://github.com/corollari/sharecaou) (currently it's in a simple vps. I can pay for all the hosting costs) and/or improve the build system (right now it's just a bunch of instructions, dockerizing it or even just creating an automated script that did everything would be awesome).
- [ ] Create a logo for Caoutchouc
- [ ] Spread the word
- [ ] Provide feedback on how to improve it, bugs that you find... You can contact me wherever you prefer:
  - Email: <me@albert.sh>
  - Telegram: @corollari
  - Twitter: [@corolari](https://twitter.com/corolari) (I'm not active but notifications reach me)
  - Reddit: [@corollari](https://www.reddit.com/user/corollari)
  - Discord @corollari#2127
  - GitHub: Just create an issue in this repo

## Why is it called caoutchouc?
Caoutchouc is the name that the indigenous people of South America used for the rubber material that is obtained from vulcanizing latex (the tree sap).

## Acknowledgements
- pandoc, a fundamental component of caoutchouc.
- The code used to convert asciimath to latex was taken from [here](https://github.com/asciimath/asciimathml/blob/master/asciimath-based/ASCIIMathTeXImg.js). For more information check the License text in `ASCIIMathTeXImg.js`.

