import {Either} from 'fp-ts/lib/Either';
import {constNull, identity} from 'fp-ts/lib/function';

export const toNullable = <L, A>(a: Either<L, A>) => a.fold(constNull, identity);
