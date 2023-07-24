import styled from "styled-components";
import { BaseText } from "../Typography/Index";

export const Container = styled(BaseText)`
  cursor: pointer;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  border-radius: 8px;
  user-select: none;
`;

/* 

create table AOAProveedores(
	Id_proveedor int PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar(100),
    ApellidoPaterno varchar(100),
    ApellidoMaterno varchar(100),
    Direccion varchar(200),
    Telefono varchar(10),
    Email varchar(50)
);

create table AOAAutopartes(
	Id_autoparte int PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar(200),
    Descripcion varchar(200),
    UnidadDeMedida varchar(200),
    PrecioUnitario varchar(200)
);

create table AOADetalleCompra(
	id_proveedor int not null,
    id_autoparte int not null,
    FOREIGN KEY (id_proveedor) REFERENCES AOAProveedores(Id_proveedor),
    FOREIGN KEY (id_autoparte) REFERENCES AOAAutopartes(Id_autoparte),
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





 */
