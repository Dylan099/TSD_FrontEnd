import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of  value){
      if(post.firstName.toLowerCase().indexOf(arg) > -1){
        resultPost.push(post);
      }else if(post.lastName.toLowerCase().indexOf(arg) > -1){
        resultPost.push(post);
      }else if(post.ci.toLowerCase().indexOf(arg) > -1){
        resultPost.push(post);
      }else if(post.correo.toLowerCase().indexOf(arg) > -1){
        resultPost.push(post);
      }else if(post.username.toLowerCase().indexOf(arg) > -1){
        resultPost.push(post);
      }else if(post.idStatus.toLowerCase().indexOf(arg) > -1){
        resultPost.push(post);
      }

    }
    return resultPost;
  }

}


