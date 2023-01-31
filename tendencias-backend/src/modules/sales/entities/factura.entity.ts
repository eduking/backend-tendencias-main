import { ClienteEntity } from "./cliente.entity";

@Entity('factura', {schema:'registro'} )
export class FacturaEntity{
@PrimaryGeneratedColumn('sv')
id:string;
//Crear
@CreateDateColumn({
   name:'created_date',
   type:'timestamptz',
   default:() => 'CURRENT_TIMESTAMP',
 })
 createdAt: Date;
 //Actualizar
@UpdateDateColumn({
 name:'updated_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
updatedAt: Date;
//Borrar
@DeleteDateColumn({
 name:'deleted_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
deletedAt: Date;
//Relaciones
@ManyToOne(() => FacturaEntity, (factura) => factura.products)
factura: FacturaEntity;
//Columna de Titulo
@Column('varchar', {
    name:'title',
    unique:true,
    comment:'Titulo de las factura',
  })
  title: string;
//Columna de Descripción
  @Column('varchar', {
    name:'descripcion',
    nullable:true,
    comment:'Descripción del producto',
  })
  descripcion: string;
//Columna de Descripción
  @Column('varchar', {
    name:'cantidad',
    nullable:true,
    comment:'Descripción del producto',
  })
  cantidad: string;
//Columna de Descripción
  @Column('varchar', {
    name:'precio',
    nullable:true,
    comment:'Descripción del producto',
  })
  precio: string;
//Columna de Descripción
  @Column('varchar', {
    name:'subtotal',
    nullable:true,
    comment:'Descripción del producto',
  })
  subtotal: string;
}