import {Module} from '@nestjs/common';
import { IdService } from './services/id.service';


@Module({
  imports: [],
  providers: [IdService],
  exports: [IdService]
})
export class UsersModule {
}
