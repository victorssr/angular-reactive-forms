import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageformatter'
})
export class ImageFormatterPipe implements PipeTransform {

    transform(imageName: string, caminho: string = '', substituir: boolean) {
        if (caminho === 'default') {
            caminho = 'assets';
        }

        if (imageName.length == 0 && substituir) {
            imageName = 'sem-foto.jpg';
        }

        return '/' + caminho + '/' + imageName;
    }

}