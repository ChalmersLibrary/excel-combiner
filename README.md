# excel-combiner

Combine first worksheet of many excel files in a directory to one.

## Prerequesities

You need to have [git](git-scm.org) and [nodejs](nodejs.org) installed on your machine.  
To check if they are installed run the following commands in a terminal.  
`git --version` to see if git is installed.  
`node --version` to see if node is installed.

## Installation

Clone this repository to your desired directory by runing `git clone https://git.chalmers.se/lari.kovanen/excel-combiner.git` in the terminal.  
Change directory to the cloned repository with `cd excel-combiner` and run `npm i` to install required libraries.

## Running the application

Run the application in the terminal  
`node app.js [path to directory]`  
and it will create a file called `combined.xlsx` with only the unique rows.
