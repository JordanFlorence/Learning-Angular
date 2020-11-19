import { Pipe, PipeTransform } from '@angular/core';

import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(content: Content[], filter: string): Content[] {
    return content.filter(c => c.tags.includes(filter));
  }

}
