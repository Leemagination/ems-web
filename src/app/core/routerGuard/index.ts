import { AuthorityGuard } from './authority-guard.service';
import { LoggedGuard } from './logged-guard.service';


export const routerGuard = [LoggedGuard, AuthorityGuard];
