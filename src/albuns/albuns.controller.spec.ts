import { Test, TestingModule } from '@nestjs/testing';
import { AlbunsController } from './albuns.controller';

describe('AlbunsController', () => {
  let controller: AlbunsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbunsController],
    }).compile();

    controller = module.get<AlbunsController>(AlbunsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
