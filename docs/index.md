---
title: Caoutchouc
---

## LaTeX but easy {.subtitle}

## What is Caoutchouc?
Caoutchouc is a typesetting language, like LaTeX, used to format documents.
Caoutchouc is also the name that the indigenous people of South America used for the rubber material that is obtained from vulcanizing latex (the tree sap).

If you'd like to try it, just sign in [ShareCaou](http://sharecaou.com) and create an `Example Project`.

## Why was it created?

The following is a comparison of the same document written in both Caoutchouc and LaTeX:

+-----------------------------------------+------------------------+
| Latex                                   | Caoutchouc             |
+-----------------------------------------+------------------------+
|```                                      |```                     |
|\documentclass{article}                  |                        |
|\usepackage[utf8]{inputenc}              |                        |
|\begin{document}                         |                        |
|                                         |                        |
|  \section{Introduction}                 |# Introduction          |
|                                         |                        |
|  $$\dfrac{1\cdot \alpha}{2}$$           |€€(1*alpha)/2€€         |
|                                         |                        |
|  \begin{figure}                         |                        |
|    \centering                           |                        |
|    \includegraphics[width=9cm]{image}   |![A caption](image.png) |
|    \caption{A caption}                  |                        |
|  \end{figure}                           |                        |
|                                         |                        |
|\end{document}                           |                        |
|```                                      |```                     |
+-----------------------------------------+------------------------+

In the previous comparison we can appreciate several of the problems LaTeX has:
- **Verbosity**: LaTeX code is very verbose, leading to the following issues:
	- Finding the bits you want to edit among all the boilerplate is hard
	- Requires a lot of unnecessary typing
	- It's annotation-centric, making it really hard to read text from the LaTeX source

- **Difficulty**: Writing LaTeX is hard
	- A lot of commands in LaTeX are unnecessarily complex and long. This means that LaTeX users have to memorize them by hard in order to use LaTeX proficiently
	- Commands are not intuitive, which leads to LaTeX writing sessions full of googling commands or copy-pasting code from other documents (which also increases verbosity) 
	- The learning curve is really steep 

- **Non-trivial setup**: Creating a new document requires initial setup
	- At the very least the creation of new documents has to include adding `\begin{document}` and many other commands. This makes the use of non-latex-adapted text editors really hard, as you either have to type all of this or copy-paste it from somewhere else.
	- Copy-pasting code snippets from other projects to include new command definitions or packages is commonplace.

### Solutions
Caoutchouc uses markdown for all text formatting. Markdown was **designed to resemble the formatting that people were already using in emails and forums**, therefore it uses a system that evolved naturally and resembles the way people think about format. This, along the fact that markdown is extremely simple, make for a highly intuitive system.

Another of the design goals of Markdown was to **enable people to read text directly from the code**. Therefore markdown-formatted text is content-centric and the verbosity of the formatting is low.

Furthermore, caoutchouc uses AsciiMath for its math formulas, which **accept math the way you would input it in a calculator**, which makes it much more intuitive and easy. When trying to do something new you can usually just attempt a guess on how it works and that will usually work just fine! 

But along with the reduction in complexity that comes with AsciiMath and markdown also comes a reduction in power. This means there are some things which you can do in LaTeX but you can't in markdown, and eventually when typesetting a document it's easy to run into these limitations. To solve this, caoutchouc **allows the direct embedding of LaTeX code in caoutchouc**. This means that, if you come across some problem that can't be solved with the standard configuration, you can always switch to LaTeX and use all of its power.

Because of how everything comes together, the **learning curve of Caoutchouc is much more gentle to newcomers**. Typesetting a new document with some math only requires knowledge of how to input math in calculators, which is commonplace, and some markdown, which is extremely simple and easy to learn. As users progress further and want to do more complex things, LaTeX can be introduced progressively.

## Caoutchouc cheatsheet
Here's a self-explanatory example of some caoutchouc code:
```
# Section 1 header
## Section 2 header
#### Section 4 header

Math can be typed the way you'd in a calculator €1+2*sqrt(2)-pi+alpha/(3.2-1)€

Adding images is easy too
![This is the figure's caption](figure.png)

- Lists
	- can
	- be
	- formatted
		- like
- this

1. Or ordered,
2. like 
3. this

- [ ] or even like this
- [x] checked

~~~~~~~
// This is a code block
if(code-block){
  writeSomeCode();
}
~~~~~~~

Text can be **emphasised**, *in italics*, ~~crossed~~, `verbatim` or include super^scripts^ and under~scripts~.

[Links are simple too](https://caoutchouc.io) 

\usepackage{xcolor}
\begin{itemize}
	\item And if you want to do something else,
	\item you can always use LaTeX directly
	\item anywhere
	\item
		$$
		f_j'(a):=
		\begin{cases}
		f_j(a) &\text{ if } f_j(a)\leq K \text{ and}\\
		K &\text{ if } K<f_j(a)\\
		\end{cases}
		$$
\end{itemize}
\colorbox{red}{Colored text!}
```

## How can I use it?
The easiest way to use it is by using [ShareCaou](http://sharecaou.com), a website that includes everything needed to get started along an easy to use interface.

If you'd like to use it locally, you'll have to install the `caou` compiler:
1. Install the prerequisites:
	- pandoc
	- texlive
	- the latest version of node and npm
2. Run `npm -g install caou`
3. Now you can compile caoutchouc documents to pdf by running
`caou document.md`
where `document.md` is the name of your caoutchouc-formatted file

Once installed, you can obtain more information about the compiler and its parameters by checking its manpage with `man caou`.

If you'd like to use caoutchouc with TeXStudio:
1. Open TeXStudio
2. Open the `Options` dropdown menu in the top bar and click on `Configure TeXStudio...`
3. Click the `Commands` tab on the left
4. Append `caou --tex ` to the beggining of the commands listed.
For example, for pdflatex you'd replace 
```pdflatex -synctex=1 -interaction=nonstopmode %.tex```
with 
```caou  --tex pdflatex -synctex=1 -interaction=nonstopmode %.tex```

**Note**: TeXstudio will only work if the files opened with it have the .tex extension, that means that you'll have to use filenames ending with `.tex` but which will contain caoutchouc code.

If you'd like to run your own instance of ShareCaou, check [this repository](https://github.com/corollari/sharecaou) for instructions on how to set it up.

Caoutchouc is open source (MIT licensed), and available [in this github repository](https://github.com/corollari/caoutchouc). Contributions are welcome.
