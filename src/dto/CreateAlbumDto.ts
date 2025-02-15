import {IsString} from 'class-validator';

export class CreateAlbumDto {
    @IsString({ message: 'O nome do album deve ser uma string válida.' })
    name_album: string;

    @IsString({ message: 'A url deve ser uma string válida.' })
    album_image: string;
}