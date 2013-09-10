module Nicr {

    interface Indexed {
        id?:any;
    };

    export class IndexedList<T extends Indexed> {

        private index: any;
        private list: T[];

        constructor(array?:any[]) {
            this.index = {};
            this.list = (array === undefined) ? [] : [].concat(array);
            this.list.forEach((value) => {
                this.index[value.id()] = value;
            });
        }

        push(value:T) {
            this.list.push(value);
            this.index[value.id()] = value;
        }

        set(idx:number, value:T) {
            this.list[idx] = value;
            this.index[value.id()] = value;
        }

        at(idx:number):T {
            return this.list[idx];
        }

        get(key:string):T {
            return this.index[key];
        }

        getList():T[] {
            return this.list;
        }

        forEach(callback:any):void {
            this.list.forEach(callback);
        }

        // map(callback:any):IndexedList<T> {
        //     return new IndexedList(this.list.map(callback));
        // }
    }

}
