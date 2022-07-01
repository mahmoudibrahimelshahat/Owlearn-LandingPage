import { Injectable, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService  {
  courses:ICourse[];
  space:string = '</br>'
  constructor() {
    this.courses = [
      {
        history:'1 - 28 July 2022',
        image:'assets/image 20.png',
        title: 'Product Management Basic - Course',
        content:`Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.`,
        price: 380,
        type: "Product Management"
      },
      {
        history:'1 - 28 July 2022',
        image:'assets/image 21.png',
        title: 'Front End Developer - Basic',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "Web Development"
      },   
      {
        history:'1 - 28 July 2022',
        image:'assets/image 22.png',
        title: 'Back End Developerr -Basic',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "Web Development"
      },   
      {
        history:'1 - 28 July 2022',
        image:'assets/image 23.png',
        title: 'UX Design - Branstroming',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "UI/UX Design"
      },   
      {
        history:'1 - 28 July 2022',
        image:'assets/image 24.png',
        title: 'UI Design - Sketch',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "UI/UX Design"
      },   
      {
        history:'1 - 28 July 2022',
        image:'assets/image 25.png',
        title: 'Graphic Design - Fundamental Design',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "Branding Design"
      },
      {
        history:'1 - 28 July 2022',
        image:'assets/image 20.png',
        title: 'Product Management Basic - Course',
        content:`Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.`,
        price: 380,
        type: "Product Management"
      },
      {
        history:'1 - 28 July 2022',
        image:'assets/image 24.png',
        title: 'UI Design - Sketch',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "UI/UX Design"
      },  
      {
        history:'1 - 28 July 2022',
        image:'assets/image 22.png',
        title: 'Back End Developerr -Basic',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "Web Development"
      },
      {
        history:'1 - 28 July 2022',
        image:'assets/image 25.png',
        title: 'Graphic Design - Fundamental Design',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "Branding Design"
      },
      {
        history:'1 - 28 July 2022',
        image:'assets/image 20.png',
        title: 'Product Management Basic - Course',
        content:`Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.`,
        price: 380,
        type: "Product Management"
      },
      {
        history:'1 - 28 July 2022',
        image:'assets/image 25.png',
        title: 'Graphic Design - Fundamental Design',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
        price: 380,
        type: "Branding Design"
      },
       ]
   }
  getPortofolios() {
    return this.courses;
  }

  }

