import {Injectable} from '@angular/core';

import 'rxjs';

// firebase/angularfire
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {Profile} from "../models/profile";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    profile: FirebaseObjectObservable<any>;
    profileList: FirebaseListObservable<any>;
    issuepics;

    constructor(public af: AngularFire, private _authService: AuthService) {
        this.profileList = this.af.database.list('/profiles/');

    }

    getProfile() {
        if(this._authService.authenticated){
            this.profile = this.af.database.object('/profiles/' + this._authService.id);
            return this.profile;
        }
        else return null;
    }

    createUser(profile: Profile) {
        let userId = this._authService.id;
        let a = this.af.database.object('/profiles/' + userId + '/');
        return firebase.database().ref('profiles/' + userId).set(profile);
        // return this.profileList.object.set(profile);
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

}