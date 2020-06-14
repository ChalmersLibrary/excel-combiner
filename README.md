# excel-combiner

[![npm (scoped)](https://img.shields.io/npm/v/@larkov/excel-combiner.svg?style=flat&logo=npm)](https://github.com/ChalmersLibrary/excel-combiner)  
Combine first worksheet of many excel files in a directory to one.

## CLI command

### Prerequisities

You need [nodejs](//nodejs.org) installed on your machine.

### Command installtion

Run `npm i -g @larkov/excel-combiner` in a terminal.

### Usage

Run `excel-combiner [path]` in your terminal where you replace `[path]` to the directory containing your excel files' It will output a `combined.xlsx` file in the same directory.

## Development

### Prerequesities

You need [git](//git-scm.org) and [nodejs](//nodejs.org) installed on your machine.  
To check if they are installed run the following commands in a terminal.  
`git --version` to see if git is installed.  
`node --version` to see if node is installed.

### Installation

Clone this repository to your desired directory by runing `git clone https://github.com/ChalmersLibrary/excel-combiner.git` in the terminal.  
Change directory to the cloned repository with `cd excel-combiner` and run `npm i` to install required libraries.

### Running the application

Run the application in the terminal  
`node app.js [path to directory]`  
and it will create a file called `combined.xlsx` with only the unique rows.
