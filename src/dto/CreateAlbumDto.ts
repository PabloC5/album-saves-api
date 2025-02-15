import {IsString} from 'class-validator';

export class CreateAlbumDto {
    @IsString({ message: 'O nome deve ser uma string válida.' })
    name_album: string;

    @IsString({ message: 'O nome deve ser uma string válida.' })
    album_image: string;
}