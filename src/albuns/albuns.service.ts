import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbunsService {
    // private albuns = [
    //     { id: 1, name: 'João' },
    //     { id: 2, name: 'Maria' }
    // ];

    private albuns = [
        {
            id: 1,
            name_album: "Ronstring",
            album_image: "https://rocknbold.com/wp-content/uploads/2020/08/71mlUmU1TVL._SL1500_.jpg",
            userId: "913"
        },
        {
            id: 2,
            name_album: "Latlux",
            album_image: "https://i.pinimg.com/550x/29/56/36/29563663d706beb26d658f7531816b8e.jpg",
            userId: "913"
        }
    ]


    findAll() {
        return this.albuns;
    }

    findOne(id: number) {
        return this.albuns.find(album => album.id === id);
    }

    create(album: { name_album: string, album_image: string, userId: string}) {
        const newAlbum = {
            id: this.albuns.length + 1,
            ...album,
        };

        this.albuns.push(newAlbum);
        
        return newAlbum;
    }

    update(id: number, albumUpdates: { name_album: string}) {
        const albumIndex = this.albuns.findIndex(album => album.id === id);
        if (albumIndex === -1) {
            return `Album com ID ${id} não encontrado`;
        }
        
        this.albuns[albumIndex] = { ...this.albuns[albumIndex], ...albumUpdates };
        
        return this.albuns[albumIndex];
    }

    remove(id: number) {
        const albumIndex = this.albuns.findIndex(album => album.id === id);
        if (albumIndex === -1) {
            return `Album com ID ${id} não encontrado`;
        }

        this.albuns.splice(albumIndex, 1);
        
        return `Album com ID ${id} removido com sucesso`;
    }

}
