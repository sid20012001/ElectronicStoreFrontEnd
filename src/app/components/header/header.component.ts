import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/categoryservice/category-service.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories:any=[];
 

  constructor(private categoryService:CategoryServiceService,private router: Router,private login:LoginserviceService){}

  ngOnInit(){
    this.categoryService.getCategory().subscribe((data:any)=>this.categories=data);
  }

  clickedCategory(categoryName: string) {
    // Your code to handle the clicked category goes here
    console.log("Clicked category:", categoryName);
    this.router.navigate(['/category', categoryName])

  }

  cartclicked(){
    if(this.login.isLoggedIn()) {
     this.router.navigate(['/actualcart']);
    }
    else{
      this.router.navigate(['/cart'])
    }

  }

}
