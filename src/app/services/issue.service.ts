import {Injectable} from '@angular/core';

import 'rxjs';

// firebase/angularfire
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {Issue} from "../models/issue";
import {UserService} from "./user.service";
import {Comment} from "../models/comment";
import {AuthService} from "./auth.service";

@Injectable()
export class IssueService {

    issues;
    issuepics;
    storage;

    auth: any;


    constructor(public af: AngularFire, private _userService: UserService, private _authService: AuthService) {

        this.issues = af.database.list('/issues/');
        this.storage = firebase.storage().ref();
        // this.issuepics = firebase.storage().ref('/issuepics/');

        // af.auth.subscribe(auth => {
        //     this.auth = auth.auth;
        //     console.log(auth.auth);
        //     // if (auth.auth) {
        //     //     this.displayName = auth.auth.displayName;
        //     //     this.email = auth.auth.email;
        //     //     this.uid = auth.auth.uid;
        //     // }
        // })

    }

    createIssue(issue: Issue) {

        // Set basic user profile defaults
        issue = new Issue(issue);


        // Save user profile
        return this.issues.push(issue);

    }

    addComment(id, commentText, comments) {
        let comment = new Comment();
        comment.name = this._authService.displayName;
        comment.author = this._authService.id;
        comment.text = commentText;
        this._userService.getProfile().subscribe(prof => {
            comment.isAdmin = prof.type === 'admin';
            comments.push(comment);
            this.af.database.object('/issues/' + id + '/').update({comments: comments});
        })

    }

    updateStatus(key, status) {
        console.log(status);
        this.af.database.object('/issues/' + key + '/').update({status: status});
    }

    updateIssue(issue) {
        return this.af.database.object('/issues/' + issue.$key + '/').update(issue);
    }

    uploadPhoto(files, userId) {
        let path = '/issues/' + userId + '/' + files.name;
        let storageref = this.storage.child(path);
        let task = storageref.put(files);
        task.on('state_changed', function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            let iurl = task.snapshot.downloadURL;
            console.log(iurl);
            // return iurl;
        });
        return path;
    }

    getImageURL(path) {
        return this.storage.child(path).getDownloadURL();
    }

    getIssueRef(id) {
        return firebase.database().ref('/issues/' + id).once('value');
    }

    // /**
    //  * Creates a new user using the plain vanilla Firebase SDK
    //  */
    // createUser(credentials) {
    //     return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
    //         firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    //             .then((authData) => {
    //                 this.userauth = authData;
    //                 this.user = credentials;
    //                 this.createInitialSetup();
    //                 resolve();
    //             }).catch((error) => {
    //             reject(error);
    //         });
    //     });
    // }
    //
    // login(credentials) {
    //     return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
    //         this.af.auth.login({email: credentials.email, password: credentials.password})
    //             .then((authData) => {
    //                 this.userauth = authData;
    //                 this.getUserData();
    //                 resolve();
    //             }).catch((error) => {
    //             reject(error);
    //         });
    //     });
    // }
    //
    // createInitialSetup() {
    //
    //     this.createUserProfile();
    //     this.createHouse();
    //     this.createDefaultAccountTypes();
    //     this.createDefaultCategoriesIncome();
    //     this.createDefaultCategoriesExpense();
    //     this.createDefaultPayees();
    //
    // }
    //
    // createUserProfile() {
    //
    //     // Set basic user profile defaults
    //     var profile = {
    //         datecreated: firebase.database['ServerValue']['TIMESTAMP'],
    //         defaultbalance: 'Current',
    //         defaultdate: 'None',
    //         email: this.user.email,
    //         enabletouchid: 'false',
    //         fullname: this.user.fullname,
    //         housenumber: this.RandomHouseCode(),
    //         profilepic: 'http://www.gravatar.com/avatar?d=mm&s=140',
    //         accounttypescount: '6'
    //     };
    //     this.user.defaultbalance = profile.defaultbalance;
    //     this.user.defaultdate = profile.defaultdate;
    //     this.user.enabletouchid = profile.enabletouchid;
    //     this.user.profilepic = profile.profilepic;
    //
    //
    //     // Save user profile
    //     this.userdata.child(this.userauth.uid).update(profile);
    //
    // }
    //
    // createHouse() {
    //
    //     // Set basic house defaults
    //     var housemember = {
    //         isadmin: true,
    //         createdby: this.user.email,
    //         dateCreated: firebase.database['ServerValue']['TIMESTAMP'],
    //     };
    //
    //     // Create node under houses and get the key
    //     this.user.houseid = this.housedata.push().key;
    //
    //     // Save key into the user->houseid node
    //     this.userdata.child(this.userauth.uid).update({houseid: this.user.houseid});
    //
    //     // Add member to housemembers node under Houses
    //     this.housedata.child(this.user.houseid + "/housemembers/" + this.userauth.uid).update(housemember);
    //
    // }
    //
    // createDefaultAccountTypes() {
    //
    //     // default account types
    //     var refTypes = this.housedata.child(this.user.houseid + "/memberaccounttypes/");
    //     refTypes.push({name: 'Checking', icon: 'ios-cash-outline'});
    //     refTypes.push({name: 'Savings', icon: 'ios-cash-outline'});
    //     refTypes.push({name: 'Credit Card', icon: 'ios-cash-outline'});
    //     refTypes.push({name: 'Debit Card', icon: 'ios-cash-outline'});
    //     refTypes.push({name: 'Investment', icon: 'ios-cash-outline'});
    //     refTypes.push({name: 'Brokerage', icon: 'ios-cash-outline'});
    //
    // }
    //
    // createDefaultCategoriesIncome() {
    //
    //     // default income categories
    //     var refCatIncome = this.housedata.child(this.user.houseid + "/membercategories/Income");
    //     refCatIncome.push({categoryname: 'Income', categoryparent: '', categorysort: 'Income', categorytype: 'Income'});
    //     refCatIncome.push({
    //         categoryname: 'Beginning Balance',
    //         categoryparent: 'Income',
    //         categorysort: 'Income:Beginning Balance',
    //         categorytype: 'Income'
    //     });
    //
    // }
    //
    // createDefaultCategoriesExpense() {
    //
    //     // default expense categories
    //     var refCatExpense = this.housedata.child(this.user.houseid + "/membercategories/Expense");
    //     refCatExpense.push({categoryname: 'Auto', categoryparent: '', categorysort: 'Auto', categorytype: 'Expense'});
    //     refCatExpense.push({
    //         categoryname: 'Gasoline',
    //         categoryparent: 'Auto',
    //         categorysort: 'Auto:Gas',
    //         categorytype: 'Expense'
    //     });
    //     refCatExpense.push({
    //         categoryname: 'Car Payment',
    //         categoryparent: 'Auto',
    //         categorysort: 'Auto:Car Payment',
    //         categorytype: 'Expense'
    //     });
    //
    // }
    //
    // createDefaultPayees() {
    //
    //     // default payees
    //     var refPayee = this.housedata.child(this.user.houseid + "/memberpayees");
    //     refPayee.push({lastamount: '', lastcategory: '', lastcategoryid: '', payeename: 'Beginning Balance'});
    //
    // }
    //
    // RandomHouseCode() {
    //     return Math.floor((Math.random() * 100000000) + 100);
    // }
    //
    // saveLocalStorage(credentials) {
    //     this.setUsername(credentials.email);
    //     this.setUserPwd(credentials.password);
    // }
    //
    // setUsername(username) {
    //     NativeStorage.setItem('username', username)
    //         .then(
    //             () => console.log('Stored item!'),
    //             error => console.error('Error storing item', error)
    //         )
    // }
    //
    // setUserPwd(pwd) {
    //     NativeStorage.setItem('userpwd', pwd)
    //         .then(
    //             () => console.log('Stored item!'),
    //             error => console.error('Error storing item', error)
    //         )
    // }
    //
    // setEnableTouchID(enabletouchid) {
    //     NativeStorage.setItem('enabletouchid', enabletouchid)
    //         .then(
    //             () => console.log('Stored item!'),
    //             error => console.error('Error storing item', error)
    //         )
    // }
    //
    // getUsernameStorage() {
    //     NativeStorage.getItem('username')
    //         .then(
    //             data => {
    //                 console.log(data);
    //                 return data;
    //             },
    //             error => console.error(error)
    //         )
    // }
    //
    // getPasswordStorage() {
    //     NativeStorage.getItem('userpwd')
    //         .then(
    //             data => {
    //                 console.log(data);
    //                 return data;
    //             },
    //             error => console.error(error)
    //         )
    // }
    //
    // getEnableTouchIDStorage() {
    //     NativeStorage.getItem('enabletouchid')
    //         .then(
    //             data => console.log(data),
    //             error => console.error(error)
    //         )
    // }
    //
    // logout() {
    //     return firebase.auth().signOut();
    // }
    //
    // //
    // // PERSONAL PROFILE
    // //-----------------------------------------------------------------------
    //
    // getUserData() {
    //     const thisuser$: FirebaseObjectObservable<any> = this.af.database.object('/users/' + this.userauth.uid);
    //     thisuser$.subscribe((val) => {
    //         this.user = val;
    //     });
    // }
    //
    // updateTouchID(ischecked: boolean) {
    //     this.userdata.child(this.userauth.uid).update({'enabletouchid': ischecked});
    // }
    //
    // updateDefaultBalance(newdefaultbalance: string) {
    //     this.userdata.child(this.userauth.uid).update({'defaultbalance': newdefaultbalance});
    // }
    //
    // updateDefaultDate(newdefaultdate: string) {
    //     this.userdata.child(this.userauth.uid).update({'defaultdate': newdefaultdate});
    // }
    //
    // updateName(newname: string) {
    //     this.userdata.child(this.userauth.uid).update({'fullname': newname});
    // }
    //
    // updateAccountTypesCounter(operation: string) {
    //     var count = parseInt(this.user.accounttypescount);
    //     if (operation === 'add') {
    //         count++;
    //     } else {
    //         count--;
    //     }
    //     this.userdata.child(this.userauth.uid).update({'accounttypescount': count});
    // }
    //
    // updateEmail(newEmail: string) {
    //     return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
    //         let user = firebase.auth().currentUser;
    //         user.updateEmail(newEmail)
    //             .then(function () {
    //                 this.user.email = newEmail;
    //                 this.updateEmailNode(newEmail);
    //                 resolve();
    //             }).catch(error => {
    //             reject(error);
    //         });
    //     });
    // }
    //
    // updatePassword(newPassword: string) {
    //     return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
    //         let user = firebase.auth().currentUser;
    //         user.updatePassword(newPassword)
    //             .then(function () {
    //                 resolve();
    //             }).catch(function (error) {
    //             reject(error);
    //         });
    //     });
    // }
    //
    // deleteData() {
    //     //
    //     // Delete ALL user data
    //     this.housedata.child(this.user.houseid).remove();
    //     this.userdata.child(firebase.auth().currentUser.uid).remove();
    // }
    //
    // deleteUser() {
    //     return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
    //         let user = firebase.auth().currentUser;
    //         user.delete()
    //             .then(function () {
    //                 resolve();
    //             }).catch(function (error) {
    //             reject(error);
    //         });
    //     });
    // }
    //
    // savePicture(pic) {
    //     this.profilepicdata.child(firebase.auth().currentUser.uid).child('profilepicture.png')
    //         .putString(pic, 'base64', {contentType: 'image/png'}).then((savedpicture) => {
    //         this.userdata.child(firebase.auth().currentUser.uid).update({'profilepic': savedpicture.downloadURL});
    //     });
    // }
    //
    // updateEmailNode(newemail) {
    //     this.userdata.child(this.userauth.uid).update({'email': newemail});
    // }
    //
    // //
    // // ACCOUNT TYPES
    // //-----------------------------------------------------------------------
    //
    // getAccountTypes(): FirebaseListObservable<any[]> {
    //     return this.af.database.list('/houses/' + this.user.houseid + '/memberaccounttypes');
    // }
    //
    // addAccountType(item) {
    //     this.housedata.child(this.user.houseid + "/memberaccounttypes/").push({name: item.name, icon: item.icon});
    //     this.updateAccountTypesCounter('add');
    // }
    //
    // deleteAccountType(item) {
    //     this.housedata.child(this.user.houseid + '/memberaccounttypes/' + item.$key).remove();
    //     this.updateAccountTypesCounter('delete');
    // }
    //
    // updateAccountType(item) {
    //     this.housedata.child(this.user.houseid + '/memberaccounttypes/' + item.$key).update({
    //         'name': item.name,
    //         'icon': item.icon
    //     });
    // }
    //
    // //
    // // ACCOUNTS
    // //-----------------------------------------------------------------------
    //
    // getAccounts() {
    //     // DO NOT USE:
    //     // this method produces a weird result where the list is returned sorted (as expected) the first time
    //     // you visit the page, but is not sorted every subsequent time you visit the page and multiplies the list
    //     return this.af.database.list('/houses/' + this.user.houseid + '/memberaccounts', {
    //         query: {
    //             orderByChild: 'accounttype'
    //         }
    //     });
    // }
    //
    // getAllAccounts() {
    //     return this.housedata.child(this.user.houseid + '/memberaccounts').orderByChild('accounttype');
    // }
    //
    // addAccount(account) {
    //     var newACcount = {
    //         'accountname': account.accname,
    //         'accounttype': account.type,
    //         'autoclear': 'false',
    //         'balancecleared': '0',
    //         'balancecurrent': '0',
    //         'balancetoday': '0',
    //         'dateopen': account.date,
    //         'transactionid': '',
    //         'balanceclass': 'textRed'
    //     }
    //     this.housedata.child(this.user.houseid + "/memberaccounts/").push(newACcount);
    // }
    //
    // updateAccount(account) {
    //     this.housedata.child(this.user.houseid + '/memberaccounts/' + account.$key).update({
    //         'accountname': account.accountname,
    //         'accounttype': account.accounttype,
    //         'dateopen': account.dateopen
    //     });
    // }
    //
    // deleteAccount(account) {
    //     this.housedata.child(this.user.houseid + '/memberaccounts/' + account.$key).remove();
    // }
    //
    // //
    // // TRANSACTIONS
    // //-----------------------------------------------------------------------
    //
    // getTransactionsByDate(account) {
    //     // This will retrieve ALL transactions
    //     // return this.housedata.child(this.user.houseid + '/membertransactions/' + account.$key).orderByChild('date');
    //
    //     // This will retrieve the most recent 100 transactions
    //     return this.housedata.child(this.user.houseid + '/membertransactions/' + account.$key).orderByChild('date').limitToLast(101);
    // }
    //
    // addTransaction(transaction) {
    //     var newACcount = {
    //         'accountname': transaction.accname,
    //         'accounttype': transaction.type,
    //         'autoclear': 'false',
    //         'balancecleared': '0',
    //         'balancecurrent': '0',
    //         'balancetoday': '0',
    //         'dateopen': transaction.date,
    //         'transactionid': '',
    //         'balanceclass': 'textRed'
    //     }
    //     //this.housedata.child(this.user.houseid + "/memberaccounts/").push(newACcount);
    // }
    //
    // updateTransaction(transaction) {
    //     //this.housedata.child(this.user.houseid + '/memberaccounts/' + account.$key).update({ 'accountname' : account.accountname, 'accounttype' : account.accounttype, 'dateopen' : account.dateopen });
    // }
    //
    // deleteTransaction(transaction) {
    //     //this.housedata.child(this.user.houseid + '/memberaccounts/' + account.$key).remove();
    // }
    //
    // //
    // // CATEGORIES
    // //-----------------------------------------------------------------------
    //
    // getAllCategories() {
    //     return this.af.database.list('/houses/' + this.user.houseid + '/membercategories', {preserveSnapshot: true});
    // }
    //
    // getAllIncomeCategories() {
    //     return this.housedata.child(this.user.houseid + '/membercategories/Income').orderByChild('categorysort');
    //     /*return this.af.database.list('/houses/' + this.user.houseid + '/membercategories/Income', {
    //      query: {
    //      orderByChild: 'categorysort'
    //      }
    //      });*/
    // }
    //
    // getAllExpenseCategories() {
    //     return this.housedata.child(this.user.houseid + '/membercategories/Expense').orderByChild('categorysort');
    //     /*return this.af.database.list('/houses/' + this.user.houseid + '/membercategories/Expense', {
    //      query: {
    //      orderByChild: 'categorysort'
    //      }
    //      });*/
    // }
    //
    // getParentCategories(type) {
    //     return this.housedata.child(this.user.houseid + '/membercategories/' + type).orderByChild('categorysort');
    // }
    //
    // addCategory(category) {
    //     var newCategory = {
    //         'categoryname': category.categoryname,
    //         'categorytype': category.categorytype,
    //         'categoryparent': category.categoryparent,
    //         'categorysort': category.categorysort
    //     }
    //     this.housedata.child(this.user.houseid + "/membercategories/" + category.categorytype).push(newCategory);
    // }
    //
    // updateCategory(category) {
    //     this.housedata.child(this.user.houseid + '/membercategories/' + category.categorytype + '/' + category.$key).update({
    //         'categoryname': category.categoryname,
    //         'categorytype': category.categorytype,
    //         'categoryparent': category.categoryparent,
    //         'categorysort': category.categorysort
    //     });
    // }
    //
    // deleteCategory(category) {
    //     this.housedata.child(this.user.houseid + '/membercategories/' + category.categorytype + '/' + category.$key).remove();
    // }
    //
    // //
    // // PAYEES
    // //-----------------------------------------------------------------------
    //
    // getPayees() {
    //     // DO NOT USE:
    //     // this method produces a weird result where the list is returned sorted (as expected) the first time
    //     // you visit the page, but is not sorted every subsequent time you visit the page and multiplies the list
    //     return this.af.database.list('/houses/' + this.user.houseid + '/memberpayees', {
    //         query: {
    //             orderByChild: 'payeename'
    //         }
    //     });
    // }
    //
    // getAllPayees() {
    //     return this.housedata.child(this.user.houseid + '/memberpayees').orderByChild('payeename');
    // }
    //
    // addPayee(payee) {
    //     var newPayee = {
    //         'lastamount': '',
    //         'lastcategory': '',
    //         'lastcategoryid': '',
    //         'payeename': payee.payeename
    //     }
    //     this.housedata.child(this.user.houseid + "/memberpayees").push(newPayee);
    // }
    //
    // updatePayee(payee) {
    //     this.housedata.child(this.user.houseid + '/memberpayees/' + payee.$key).update({
    //         'lastamount': payee.lastamount,
    //         'lastcategory': payee.lastcategory,
    //         'lastcategoryid': payee.lastcategory,
    //         'payeename': payee.payeename
    //     });
    // }
    //
    // deletePayee(payee) {
    //     this.housedata.child(this.user.houseid + '/memberpayees/' + payee.$key).remove();
    // }
    //
    // //
    // // MISCELANEOUS
    // //-----------------------------------------------------------------------
    //
    // handleData(snapshot) {
    //     try {
    //         // Firebase stores everything as an object, but we want an array.
    //         var keys = Object.keys(snapshot.val);
    //         console.log('keys: ', keys, snapshot.val);
    //         // variable to store the todos added
    //         var data = [];
    //         // Loop through the keys and push the todos into an array
    //         for (var i = 0; i < keys.length; ++i) {
    //             data.push(snapshot.val()[keys[i]]);
    //         }
    //         console.log(data);
    //     }
    //     catch (error) {
    //         console.log('catching', error);
    //     }
    // }
    //
    //
    // /*
    //  // Find an item in the array
    //  //http://stackoverflow.com/questions/2713599/how-do-i-select-an-item-out-of-a-javascript-array-when-i-only-know-a-value-for-o
    //  find_in_array(arr, name, value) {
    //  for (var i = 0, len = arr.length; i<len; i++) {
    //  if (name in arr[i] && arr[i][name] == value) return i;
    //  };
    //  return false;
    //  }
    //  var id = find_in_array(measurements.page[0].line, 'lineid', 22);
    //  */
    //
}