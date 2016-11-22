# OwlVision v0.1

## Get up and running

1. Make sure you have the latest Node LTS installed.
2. clone `git@gitlab.com:TheLeftovers/OwlVisionFront.git` (set up your SSH keys first! instructions are given by gitlab in that screen)
3. `npm install`
4. `npm install angular-cli -g` to install angular-cli globally
5. `npm install typescript -g`
6. `ng serve` then navigate to http://localhost:4200

## How Make Changes to Repo

1. In your terminal, in the root directory of the project after cloning the repo, run `git branch` to ensure you are in the master branch. If you are not, then run `git checkout master` to change branches
2. Now make sure your branch is up to date by running `git pull origin master`
3. Now you are ready to create a new branch where you can work on new features. The following will create a new branch and change branches in one line: `git checkout -b branch_name` branch_name can be anything you want
4. Now make modification to the code however you want.
5. When you are ready to push them back to the repo, you must execute these operations:
 1. `git add . --all` to stage modified files for commit
 2. `git commit -m "describe your changes here in the commit message"`
 3. `git push origin branch_name`
6. Now your branch will be pushed to the repo but will not have merged with the master branch yet. For this, you may either follow the link provided by gitlab in the terminal or just go into gitlab > branches and next to the branch you just updated, there will be a "merge request" button. Click it and submit it. Once it's approved it will be merged to master.

###References:

[AngularFire2 Documentation](https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md): good place to gain an understanding of firebase and basic data manipulation

[Firebase SDK API](https://firebase.google.com/docs/reference/js/): AngularFire is a library on top of the firebase SDK. If you can't do something in AF2, look here.

[Core-UI Angular2 Demo](http://coreui.io/demo/Angular2_Demo/#/dashboard): Browse the UI components to use in our project ....

[Core-UI Demo](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/tree/master/Angular2_CLI_Full_Project/src/app): then grab the code from here for the components you liked in the demo and use them

[[**]Markdown Reference](https://gitlab.com/help/user/markdown)
