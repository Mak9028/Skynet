import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Header } from 'ionic-angular';
//import { Observable } from '@mobiscroll/angular/src/js/frameworks/angular';

//import { AppPreferences } from '@ionic-native/app-preferences';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  apiUrl = 'https://myapp-ffbd3.firebaseio.com/';


  balurl = "http://103.54.183.99:7999/mobile/mb_login/";

 // apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

 data: any;
 res : any;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider'); 
    //this.getuserlogin();
  }
  


  getuserlogin(username:any, password:any):Promise<any>{
 

  const myheader = new HttpHeaders().set('Content-Type', 'application/json')
  var header = { "headers": {"Content-Type": "application/json"} };


 let body 		: any 		 = {       
    "role":"Subscriber",
  "username":username,
   "password":password,
   "ClientAccessID":"BR1706142835" };

 let headers = new Headers();
 headers.append("Content-Type", "application/json");

  return new Promise((resolve, reject) => {
    //console.log("inside");
    this.http.post(this.balurl, JSON.stringify(body),{headers: myheader})
      .subscribe(data => {
        resolve(data);
        //console.log(data.subscriber[0].client_access_id)
         this.data= data;
        //console.log(this.data+" local data")

      //   this.appPreferences.store("LoginData", 'loginType', this.data.loginType);
      //   this.appPreferences.store("LoginData", 'message', this.data.message); 
      //   this.appPreferences.store("LoginData", 'status', this.data.status);   
      //   this.appPreferences.store('subscriber', 'client_access_id',data.subscriber[0].client_access_id);    
      //   this.appPreferences.store('subscriber', 'subscriber_status', data.subscriber[0].subscriber_status); 
      //   this.appPreferences.store('subscriber', 'subscriber_id',data.subscriber[0].subscriber_id); 
      //   this.appPreferences.store('subscriber', 'subscriber_area_id', data.subscriber[0].subscriber_area_id);
      //   this.appPreferences.store('subscriber', 'subscriber_username',data.subscriber[0].subscriber_username);
      //   this.appPreferences.store('subscriber', 'subscriber_email',data.subscriber[0].subscriber_email);

      //  this.appPreferences.fetch('subscriber').then((res) => {  console.log("CLIENT ACCESS ID"+res);});

        //this.res = this.appPreferences.fetch ('LoginData', 'subscriber');
        //console.log("CLIENT ACCESS ID"+this.res);
      }, (err) => {
        reject(err);
      });
  });

  //  console.log("Cal Balradius");

  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"GetPaymentHistoryResponse/GetNotificationonMemberIdResult/NewDataSet/Table.json").subscribe(data => {
        resolve(data);
        console.log(this.apiUrl+"GetPaymentHistoryResponse/GetNotificationonMemberIdResult/NewDataSet/Table.json");
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);  
        });
    });
  }

  getpaymenthistory(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"RevelHis/GetPaymentHistoryResponse/GetPaymentHistoryResult/NewDataSet/Table.json").subscribe(data => {
        resolve(data);
        console.log(this.apiUrl+"RevelHis/GetPaymentHistoryResponse/GetPaymentHistoryResult/NewDataSet/Table.json");
      }, err => {
        console.log(err);
      });
    });

  }

  getpackageList(){

    return new Promise(resolve => {
      this.http.get(this.apiUrl+"GetPackageListByMemberidResult/GetPackageListByMemberidResponse/GetPackageListByMemberidResult/NewDataSet/Table.json").subscribe(data => {
        resolve(data);
        console.log(this.apiUrl+"GetPackageListByMemberidResult/GetPackageListByMemberidResponse/GetPackageListByMemberidResult/NewDataSet/Table.json");
      }, err => {
        console.log(err);
      });
    });

  }

  GetComplaintCategoryList(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"Complaint/GetComplaintCategoryListResponse/GetComplaintCategoryListResult/NewDataSet/Table.json").subscribe(data => {
        resolve(data);
        console.log(this.apiUrl+"Complaint/GetComplaintCategoryListResponse/GetComplaintCategoryListResult/NewDataSet/Table.json");
      }, err => {
        console.log(err);
      });
    });
  }

  /*
  postrequestpicker(date:string, time:string, message:string ) {
    const myheader = new HttpHeaders().set('Content-Type', 'text/xml')
    let body = new HttpParams();
    body = body.set('date', date);
    body = body.set('time', time);
    body = body.set('message', message);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body,{headers: myheader})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



R&S(){

  //let body = new HttpParams();
  // body = body.set('role', 'Subscriber');
  // body = body.set('time', 'username');
  // body = body.set('password', '313233343536373853214023');
  // body = body.set('ClientAccessID', 'BR1706142835');

  //     let headers 		: any		 = new HttpHeaders({ 'Content-Type': 'application/json'}),
    // options 		: any 		 = {        "role":"Subscriber",
    // "username":"deven",
    //  "password":"313233343536373853214023",
    //  "ClientAccessID":"BR1706142835" },
//     url       	: any      	 = this.balurl;


// this.http.post(url, options, headers)
// .subscribe((data : any) =>
// {
//    // If the request was successful notify the user
//    console.log(data + ' was successfully created');
// },
// (error : any) =>
// {
//    console.dir(error);
// });

    // const options = {
    //   method: 'post',
    //   data: {
        // "role":"Subscriber",
        // "username":"deven",
        //  "password":"313233343536373853214023",
        //  "ClientAccessID":"BR1706142835"
    //   }
    // };
    
    // this.cordova.plugin.http.sendRequest(this.balurl, options, function(response) {
    //   // prints 200
    //   console.log(response.status);
    // }, function(response) {
    //   // prints 403
    //   console.log(response.status);
    
    //   //prints Permission denied
    //   console.log(response.error);
    // });



 //   const myheader = new HttpHeaders().set('Content-Type', 'application/json')
  //   var header = { "headers": {"Content-Type": "application/json"} };
  //   let body = new HttpParams();
  //   body = body.set('role', 'Subscriber');
  //   body = body.set('time', 'username');
  //   body = body.set('password', '313233343536373853214023');
  //   body = body.set('ClientAccessID', 'BR1706142835');

  //  let headers = new Headers();
  //  headers.append("Content-Type", "application/json");

  //   return new Promise((resolve, reject) => {
  //     console.log("inside");
  //     this.http.post(this.balurl, JSON.stringify(body),{headers: headers})
  //       .subscribe(res => {
  //         resolve(res);
          
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });

}


  */






}
