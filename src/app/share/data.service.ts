import { Injectable } from '@angular/core';
import { Contact } from './contact';
//import { DATA } from './mock-contacts';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
private data: Contact[] = [
	new Contact(1, 'Bob', 'Gromov', 32, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deserunt voluptatem, minima aspernatur, ipsa vero veritatis labore aliquid doloremque quos quidem laboriosam iste quisquam exercitationem harum. Cupiditate deleniti autem vitae!', 'smart guy', 'http://gidonline.in/avatars/zbuwgemi0f-1600x1200-avatar.jpg'),
	new Contact(2, 'Rob', 'Ivanov', 22, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae quia tempora iste iusto, pariatur dolore accusamus. Explicabo asperiores, ab natus, pariatur velit delectus culpa fuga assumenda, iste consequuntur consequatur!', 'clever guy', 'http://gidonline.in/avatars/.png-424775-avatar.png'),
	new Contact(3, 'Jack', 'Pahomov', 15, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aut aperiam soluta quia ipsum veniam vitae beatae, autem asperiores labore nulla est, sit totam enim voluptatum modi ut eligendi molestiae.', 'dummy boy', 'https://static.wikia.nocookie.net/894a1b3d-565e-4011-85d1-cc2be3fa71ef/scale-to-width-down/50'),
	new Contact(4, 'Gary', 'Petrov', 44, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis repellendus culpa ad quis eos blanditiis libero! Sint laboriosam veniam non recusandae eligendi nesciunt distinctio culpa reiciendis error, quaerat iste, accusantium?', 'dummy boy', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkUBwgKChULDSEbDQwYGCIdIRAeICcmJSMdISskJTQsMCspIScpIjEtJykuLzUxIyUzODMtNzQtLy8BCgoKDQwNGg8QGislHyU3KzcwLTUtLTUrKzUrKy01KystLS0tLS0yNTYtKzc1LS0tNzctLTctKystLSsrKysrK//AABEIADIAMgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQEEAwYHAv/EADMQAAIBAwIDBwIDCQAAAAAAAAECAwAEEQUSITFRBhMiMmFxwUHwFBWRIzNigaGx0eHx/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDBAH/xAAgEQACAgIBBQEAAAAAAAAAAAAAAQIRAyExEiIyQWEz/9oADAMBAAIRAxEAPwDlujqN3h5jka2WEtESJYo5MJlsAcKTaJa97twGJJ8VP9Rlt7eOMwKRuAD555rZHJWRGXN3KkYoroGfyREnypjGPv3prpulLeJNLPsxCuT6noKjs1pY1WdzAQ5RuMeQDIM8QCfrWyz9nrk7PyW1mQcO+3MCEweI4cOJ545Vpea1RBYOl6In0mz03s2BLAneSKCXx9TxxSTXvwEOnhI+63IoyABw96t9qrm9uRbIN3iOBj6kc8f2qsmjxjS51l0q5Ep4LKzDb7/P8qki7VaOfu43t+759amonRo55AGLbWIzgcamu0gGvZi6/AS7+4WUqPCufL6/fWsl5PPe3Ku6oiq2frxP/aXWbBbSTHUD5/xTGMpa2SyXJWTcwKRdFz98qTLGMKfsVXJlrSr2S1vgNkluHPiONpYemBwB9q6tpl+XsVFudoZcbegNcOWYxanLvULvbIIPA+orpGg6vZ2+nAXskgV+CuoJI6cuI/1SvaNOOkZe2SfgrrSto8inH60n7R6w+1hDIT3o4/w5qO09zbmSI/m0k4HCON1YFB1ORWt6jcoFUR5fHHPyaaPBOb7mLnjfe3vRVd7li7ZC86mmoS0ebaK4ureNYgBuclm6Veltj3bZLSFU8x+tK7DfJd24jfbhxj9KYpcG7uiFuNmD5up6UuST6/h1x1SML2xa0B5FRyp72XuRJEEnfGPX+tK7pO7Hmzt5+tGnOsUqFgME4IolJNJo5jbi2mO9WijjmyZ1dmHQDA68BzrX76fmAMBefqab3tsh2khstx9vT4pDdoTNgcia6mroJp8sqd3nmTxooecK7DHI0VQTZekREkGxFXjzAqvcoqo21QPEPiiis6NR41KR+9Txtz6+1ZFdwi4ZhxoooX5k5eZdmnm2L+1fl1NUizd7zPlqKKIeQZeCtgHmAaKKKoB//9k='),
	new Contact(5, 'John', 'Sidorov', 25, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum iusto quam, ea deserunt numquam beatae. Quas voluptates illo, iusto ipsum. Doloribus illum voluptate minima, voluptatum aliquid iste provident odit fugiat?', 'smart boy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGciexP7SRMmWepssDfxF2_B67DC9nygzkq2VeM62b8xVhw-bkg'),
	new Contact(6, 'Dilan', 'Dimitrov', 28, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, maiores voluptatum veniam ullam. Inventore tempore aspernatur reiciendis illo cupiditate fuga, iusto eius provident sapiente ex nam eum labore eos?', 'clever boy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vV3_0zv_hdWu4FRrzfT0ZC6ZDJTVXrplY7_J61ltq0hW2d7l')
]
dataChanged = new Subject<Contact[]>();


getData(): Observable<Contact[]> {
	return of(this.data);//.pipe(delay(3000));
}

getDataById(id: number) {
	return of(this.data.find(item => item.id === id));
}

  constructor() { }
}
