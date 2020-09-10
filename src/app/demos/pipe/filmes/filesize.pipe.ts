import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sizefile'
})
export class FileSizePipe implements PipeTransform {

    transform(size: number) {
        let tamanho = size / (1024 * 1024);
        let extensao = " MB";

        if (tamanho > 1024) {
            tamanho = tamanho / 1024;
            extensao = " GB";
        }

        return tamanho.toFixed(2) + extensao;
    }

}