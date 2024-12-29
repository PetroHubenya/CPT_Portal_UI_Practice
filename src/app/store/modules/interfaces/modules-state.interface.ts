import { IModule } from "../../../modules/shared/interfaces/user-management/module.interface";

export interface IModulesState {
  modules: IModule[],
  activeModule: IModule | null
}
