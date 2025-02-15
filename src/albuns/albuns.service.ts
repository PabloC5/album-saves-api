import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AlbunsService {
    constructor(private prisma: PrismaService) {}

    // private albuns = [
    //     { id: 1, name: 'João' },
    //     { id: 2, name: 'Maria' }
    // ];

    // private albuns = [
    //     {
    //         id: 1,
    //         name_album: "Ronstring",
    //         album_image: "https://rocknbold.com/wp-content/uploads/2020/08/71mlUmU1TVL._SL1500_.jpg",
    //         userId: "913"
    //     },
    //     {
    //         id: 2,
    //         name_album: "Latlux",
    //         album_image: "https://i.pinimg.com/550x/29/56/36/29563663d706beb26d658f7531816b8e.jpg",
    //         userId: "913"
    //     }
    // ]


    async findAll(filter?: string, page?: number) {
        let results = await this.prisma.album.findMany();

        if (filter) {
            results = results.filter((album) =>
                album.name.toLowerCase().includes(filter.toLowerCase()),
            );
        }

        const pageSize = 5;
        const start = ((page || 1) - 1) * pageSize;

        return results.slice(start, start + pageSize);
    }

    async findOne(id: number) {
        const album = this.prisma.album.findUnique({where: {id}});
        if (!album) throw new NotFoundException('Album não encontrado.');
        return album;
    }

    create(data: Prisma.AlbumCreateInput) {
        return this.prisma.album.create({ data });
    }

    update(id: number, data: Prisma.AlbumUpdateInput) {
        return this.prisma.album.update({ where: { id }, data })        
    }

    remove(id: number) {
        return this.prisma.album.delete({where: {id}});        
    }

}
