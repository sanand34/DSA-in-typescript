

class Linked_List{
    length:number;
    head:any;
    constructor(){
        this.length=0;
        this.head=null;
    }
    
    add=(data:any)=>{
        var node={data:data,next:null};
        var current=this.head;
        if(!current){
            this.head=node;
            this.length++;
            return node;
        }
        while(current.next){
            current=current.next;
        }
        current.next=node;
        this.length++;
        return node;
    }
    get=(index:number)=>{
        if(index>this.length){
            return "Node is not present at this position"
        }
        var current=this.head,count=0;
        while(count<index-1){
            current=current.next;
            count++;
        }
        return current;
    }
    remove=(index:number)=>{
        var current=this.head,count=0,prev=null;
        if(index>this.length){
            return "Node is not present at this position"
        }
        if(index===0){
            this.head=current.head;
            this.length--;
            return this.head;
        }
        while(count<index-1){
            prev=current;
            current=current.next;
            count++;
        }
        prev.next=current.next;
        current=null;
        this.length--;
        return this.head;


    }
}

var ll=new Linked_List();
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(ll.remove(2));