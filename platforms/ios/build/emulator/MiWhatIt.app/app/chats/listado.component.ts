import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
    selector:'chat-listado',
    templateUrl: 'chats/listado.component.html',
    styleUrls: ['chats/listado.component.css']
})
export class ChatListadoComponent{

    email:string;
    password:string;


    mockChat:any;

    constructor(private routerExt: RouterExtensions ){}

    ngOnInit(){
        this.mockChat = [{
            "id": 1, 
            "nombre": "Grupo de chat de nativeScript",
            "usuarios": {
                "usuario_1": "jorgeucano",
                "usuario_2": "jorgeucano2",
                "usuario_3": "jorgeucano3"
            },
            "creacion": "12/12/2016",
            "dialogo": {
                "date": "12/12/2016",
                "texto": "Hola alguien vio la clase?",
                "usuario": "jorgeucano",
                "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            }
        },
        {
            "id": 2,
            "nombre": "otro chat",
            "usuarios": {
                "usuario_1": "jorgeucano",
                "usuario_2": "jorgeucano2",
                "usuario_3": "jorgeucano3"
            },
            "creacion": "12/12/2016",
            "dialogo": {
                "date": "12/12/2016",
                "texto": "Hola alguien vio la clase?",
                "usuario": "jorgeucano",
                "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            }
        },
        {
            "id": 3,
            "nombre": "Jorge CAno",
            "usuarios": {
                "usuario_1": "jorgeucano",
                "usuario_2": "jorgeucano2",
                "usuario_3": "jorgeucano3"
            },
            "creacion": "12/12/2016",
            "dialogo": {
                "date": "12/12/2016",
                "texto": "Hola alguien vio la clase?",
                "usuario": "jorgeucano",
                "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            }
        },
        {
            "id": 4,
            "nombre": "nativescript",
            "usuarios": {
                "usuario_1": "jorgeucano",
                "usuario_2": "jorgeucano2",
                "usuario_3": "jorgeucano3"
            },
            "creacion": "12/12/2016",
            "dialogo": {
                "date": "12/12/2016",
                "texto": "Hola alguien vio la clase?",
                "usuario": "jorgeucano",
                "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            }
        }];
        console.dir(this.mockChat);
    }

    elegirChat(id){
        this.routerExt.navigate(["/chat", id]);
    }

}