import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs/Rx";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router){}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors here.
      console.log(error);
    });
  }

  singinUser(user: User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors here.
      console.log(error);
    });
  }

  isAuthenticated():Observable<boolean>{
    /*var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }*/
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
         subject.next(true); //emit a new value that is true
      }
      else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }


  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }
}
