// обертка - универсальная функция: изменить "имутабельно" - объект в массиве
import {IUser} from '../../redux/users-reducer';

type IDParamsType = 'id' |'name' | 'photos' | 'status' | 'followed'

export const updateObjectInArray = (items: Array<IUser>, itemId: number, objPropName: IDParamsType, newObjProps: Object) => {
   return items.map(u => (+u[objPropName] === itemId ? {...u, ...newObjProps} : u));
}

