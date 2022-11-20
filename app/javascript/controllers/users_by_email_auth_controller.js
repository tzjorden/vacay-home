import { Controller } from '@hotwired/stimulus';
import axios from 'axios';

export default class extends Controller {
    static targets = ['email', 'submit'];
     
    connect(){
        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();
            //if input is empty 
            if(this.emailTarget.value.length === 0 ) {

            } else {
            
                axios.get('/api/users_by_email', {
                    params: {
                        email: this.emailTarget.value
                    },
                    //sends the data as json
                    headers: {
                        'ACCEPT' : 'application/json'
                    }
                //if user exists directs to signin page
                }).then((res)=> {
                    Turbo.visit('/users/sign_in');
                //if user doesnt exist directs to signup page
                }).catch((res) => {
                    Turbo.vist('/users/sign_up')
                })
            }
        })
     }
}