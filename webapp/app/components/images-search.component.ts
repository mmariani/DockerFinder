/**
 * Created by dido on 7/10/16.
 */
import { Component} from '@angular/core';
import {ImageService} from '../services/image.service'
import {Image }  from '../models/image'
import {ImagesComponent}  from '../components/images.component'
import {Router} from "@angular/router";

@Component({
        selector: 'my-search-images',
        templateUrl: 'app/template/images-search.component.html',
        directives:[ImagesComponent]
})
export class ImagesSearchComponent {
    submitted = false;
    sorting   = ['stars', 'pulls',];
    ordering  = ['ascending order','descending order'];
     
    bin :string ;
    version: string;
    sort: string;
    order : string;

    resultImages : Image[];
    count = 0;

    constructor( private router: Router, private imageService: ImageService){

    }

    onSubmit() {
        this.imageService.searchImages(this.diagnostic)
            .then(images=>{
                if(images.length > 0 ) {
                    this.resultImages = images;
                    this.count = images.length
                    console.log(images);
                }
            });   //res in the json
        this.submitted = true;
        //this.router.navigate(['/images']);
    }

     // TODO: Remove this when we're done
    get diagnostic() { return this.bin+"="+this.version }

    edit(){
        this.submitted=false;
        this.resultImages = [];
    }

}


// class SearchUrlEncoded{
//     bins = [{bin:String, ver:String}];
//
// }
