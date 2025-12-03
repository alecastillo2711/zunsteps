export const resetGet = {
  id: 1,
  name: "Reset Password",
  description:
    "Este script reinicia la contraseña del operador get a una contraseña predeterminada (Root2020).",
  code: "update operador set password = 'E63861044767D6E16A11E1BEB9B725DA72BD40C7' where nombre = 'get'",
};
export const clearStock = {
  id: 2,
  name: "Limpiar BD Stock",
  description: "Con este script se puede limpiar la base de datos de ZUNstock.",
  code: `delete from ALMTRACR
delete from ALMCOMCD
delete from ALMCOMPC

delete from ALMINVED
delete from ALMINVEL
delete from ALMTRAIR
delete from ALMINVEC

delete from ALMPEDSD
delete from ALMPEDSl
delete from ALMPEDSC

delete from ALMMOVID
delete from ALMMOVIL
delete from ALMTRATR
delete from ALMMOVIC`,
};
export const resetPassOpes = {
  id: 3,
  name: "Cambiar Clave de Op Especiales",
  description:
    "Con este script se cambia la clave de operaciones especiales de cada almacen, donde cada clave corresponde al index del almacen",
  code: `update ALMNALMA set clave_umov='2D0C8AF807EF45AC17CAFB2973D866BA8F38CAA9', 
fecha_ccumov=GETDATE(),clave_operexc='2D0C8AF807EF45AC17CAFB2973D866BA8F38CAA9', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=90
update ALMNALMA set clave_umov='4CD66DFABBD964F8C6C4414B07CDB45DAE692E19', 
fecha_ccumov=GETDATE(),clave_operexc='4CD66DFABBD964F8C6C4414B07CDB45DAE692E19', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=91
update ALMNALMA set clave_umov='8EE51CAAA2C2F4EE2E5B4B7EF5A89DB7DF1068D7', 
fecha_ccumov=GETDATE(),clave_operexc='8EE51CAAA2C2F4EE2E5B4B7EF5A89DB7DF1068D7', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=92
update ALMNALMA set clave_umov='08A35293E09F508494096C1C1B3819EDB9DF50DB', 
fecha_ccumov=GETDATE(),clave_operexc='08A35293E09F508494096C1C1B3819EDB9DF50DB', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=93
update ALMNALMA set clave_umov='215BB47DA8FAC3342B858AC3DB09B033C6C46E0B', 
fecha_ccumov=GETDATE(),clave_operexc='215BB47DA8FAC3342B858AC3DB09B033C6C46E0B', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=94
update ALMNALMA set clave_umov='8E63FD3E77796B102589B1BA1E4441C7982E4132', 
fecha_ccumov=GETDATE(),clave_operexc='8E63FD3E77796B102589B1BA1E4441C7982E4132', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=95
update ALMNALMA set clave_umov='6FB84AED32FACD1299EE1E77C8FD2B1A6352669E', 
fecha_ccumov=GETDATE(),clave_operexc='6FB84AED32FACD1299EE1E77C8FD2B1A6352669E', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=96
update ALMNALMA set clave_umov='812ED4562D3211363A7B813AA9CD2CF042B63BB2', 
fecha_ccumov=GETDATE(),clave_operexc='812ED4562D3211363A7B813AA9CD2CF042B63BB2', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=97
update ALMNALMA set clave_umov='31BD9B9F5F7B338E41B56183A2F3008B541D7C84', 
fecha_ccumov=GETDATE(),clave_operexc='31BD9B9F5F7B338E41B56183A2F3008B541D7C84', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=98
update ALMNALMA set clave_umov='9A79BE611E0267E1D943DA0737C6C51BE67865A0', 
fecha_ccumov=GETDATE(),clave_operexc='9A79BE611E0267E1D943DA0737C6C51BE67865A0', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=99
update ALMNALMA set clave_umov='310B86E0B62B828562FC91C7BE5380A992B2786A', 
fecha_ccumov=GETDATE(),clave_operexc='310B86E0B62B828562FC91C7BE5380A992B2786A', fecha_ccopx=GETDATE() where CAST(cod_almacen as 
int)=100`,
};
export const prodMachete = {
  id: 4,
  name: "Validar Cierre (Machete)",
  description: "Validar Cierre de año de ZUNstock",
  code: `USE [ZUNst]
GO
/****** Object:  StoredProcedure [dbo].[sp_Validar_Cierre_A]    Script Date: 01/14/2022 14:29:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


	-- =============================================
	-- Author:		<Author,,Name>
	-- Create date: <Create Date,,>
	-- Description:	<Description,,>
	-- =============================================
    ALTER PROCEDURE [dbo].[sp_Validar_Cierre_A]
	 
    AS
        BEGIN
		-- SET NOCOUNT ON added to prevent extra result sets from
		-- interfering with SELECT statements.
            SET NOCOUNT ON;
            DECLARE @fecha_cerrar DATETIME ,
                @cant INT ,
                @id_stocc INT ,
                @fecha_umov DATETIME ,
                @exist_real NUMERIC(15, 4) ,
                @id_emone INT ,
                @importe_arti NUMERIC(15, 4) ,
                @importe_real NUMERIC(15, 2) ,
                @id_arti INT ,
                @id_aeasec INT ,
                @id_ecgpo INT ,
                @id_ctainv INT ,
                @id_ctacosto INT ,
                @id_ctagasto INT ,
                @id_ctadesg INT ,
                @id_ctaingreso INT ,
                @id_empr INT ,
                @id_moneda INT ,
                @id_prov INT ,
                @id_ctaxpagar INT ,
                @id_ctarancel INT ,
                @id_ctamanip INT ,
                @id_ctaflete INT ,
                @id_ctaemb INT ,
                @id_ecfsb INT ,
                @id_ctafaltant INT ,
                @id_ctasobr INT ,
                @cod_grav CHAR(10) ,
                @id_almacen INT ,
                @id_grupo INT ,
                @return_value INT ,
                @cuenta VARCHAR(255) ,
                @des_arti VARCHAR(255) ,
                @des_almacen_seccion VARCHAR(255) ,
                @des_grupo VARCHAR(255) ,
/*20181206 pazo. nuevo por caja */
				@id_caja INT ,
				@cod_caja VARCHAR(10) ,
				@desc_caja VARCHAR(55) ,
				@id_ntcod INT ,
				@desc_ntcod VARCHAR(100) ,
				@cod_desc INT ,
				@desc_desc VARCHAR(50) ,
				@id_nporr INT ,
				@cod_nporr INT ,
				@desc_nporr VARCHAR(50) ,
				@id_ctatcobro INT ,
				@id_ctaefect INT ,
				@id_ctaingr INT ,
				@id_ctadto INT ,
				@id_ctacjfal INT ,
				@id_ctacjsob INT 
--20181206 HASTA AQUI LO ANADIDO
		--//a la fecha cont le sumo un mes y pongo primer dia del mes para que al comparar todas caigan en el mes/año del cierre
            SELECT  @fecha_cerrar = DATEADD(s, 0,
                                            DATEADD(mm,
                                                    DATEDIFF(m, 0,
                                                             MIN(fecha_umov))
                                                    + 1, 0))
            FROM    dbo.ALMNALMA
            WHERE   fecha_umov IS NOT NULL
	        
	--        CREATE TABLE ##cierre_error
	--            (
	--              mensaje_error VARCHAR(250)
	--            )
	--          
            DELETE  FROM ##cierre_error
	        
			--//1.Verificar que no existan operaciones sin actualizar teniendo en cuenta la fecha de contabilidad--//
			--ALMORPRC
            IF ( SELECT COUNT(*)
                 FROM   ALMORPRC
                        LEFT JOIN dbo.ALMCOMPC ON dbo.ALMORPRC.consecutiv = dbo.ALMCOMPC.nro_orden
                        LEFT JOIN dbo.ALMEASEC ON dbo.ALMCOMPC.id_aeasec = dbo.ALMEASEC.id_aeasec
                                                  AND ALMORPRC.id_almacen = ALMEASEC.id_almacen
                 WHERE  ( ( fecha_orden < @fecha_cerrar
                            AND fecha_cont < @fecha_cerrar
                            AND fecha_cont IS NOT NULL
                          )
                          AND ( ALMCOMPC.estado = 1
                                OR ALMCOMPC.estado = 6
                                OR ALMCOMPC.estado = 4
                              )
                        )
                        OR ( ( fecha_orden < @fecha_cerrar
                               AND fecha_cont IS NULL
                             )
                             AND ( ALMORPRC.estado = '1'
                                   OR ALMORPRC.estado = '6'
                                 )
                           )
               ) > 0
                BEGIN
	            
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 							
                            )
                    VALUES  ( 'Existen operaciones de órdenes de compras pendientes de actualizar con fecha de contabilización menor a la del cierre:' 						
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 							
                            )
                            SELECT  'Orden de compra consecutivo:'
                                    + ALMORPRC.consecutiv + ' Nro Orden:'
                                    + ALMORPRC.nro_orden
                            FROM    ALMORPRC
                                    LEFT JOIN dbo.ALMCOMPC ON dbo.ALMORPRC.consecutiv = dbo.ALMCOMPC.nro_orden
                                    LEFT JOIN dbo.ALMEASEC ON dbo.ALMCOMPC.id_aeasec = dbo.ALMEASEC.id_aeasec
                                                              AND ALMORPRC.id_almacen = ALMEASEC.id_almacen
                            WHERE   ( ( fecha_orden < @fecha_cerrar
                                        AND fecha_cont < @fecha_cerrar
                                        AND fecha_cont IS NOT NULL
                                      )
                                      AND ( ALMCOMPC.estado = 1
                                            OR ALMCOMPC.estado = 6
                                            OR ALMCOMPC.estado = 4
                                          )
                                    )
                                    OR ( ( fecha_orden < @fecha_cerrar
                                           AND fecha_cont IS NULL
                                         )
                                         AND ( ALMORPRC.estado = '1'
                                               OR ALMORPRC.estado = '6'
                                             )
                                       )	               
                END
	         
			--ALMCOMPC 
            IF ( SELECT COUNT(*)
                 FROM   ALMCOMPC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                              OR estado = 4
                            )
               ) > 0
                BEGIN

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
							
                            )
                    VALUES  ( 'Existen operaciones de compras pendientes con fecha de contabilización menor a la del cierre:' 
							
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                            SELECT  'Compra consecutivo:'
                                    + ALMCOMPC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMCOMPC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMCOMPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                          OR estado = 4
                                        )          
                END 

	        --ALMPEDSC            
            IF ( SELECT COUNT(ALMPEDSC.id_pedsc)
                 FROM   ALMPEDSC
                        LEFT JOIN dbo.ALMMOVIC ON dbo.ALMPEDSC.id_pedsc = dbo.ALMMOVIC.id_pedsc
                 WHERE  ( ( fecha_ped < @fecha_cerrar
                            AND fecha_cont < @fecha_cerrar
                            AND fecha_cont IS NOT NULL
                          )
                          OR ( fecha_ped < @fecha_cerrar
                               AND fecha_cont IS NULL
                             )
                        )
                        AND ( ALMPEDSC.estado = 1
                              OR ALMPEDSC.estado = 6
                            )
               ) > 0
                BEGIN  
	                
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
							
                            )
                    VALUES  ( 'Existen pedidos pendientes con fecha de contabilización menor a la del cierre:' 
							
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                            SELECT  'Pedido consecutivo:'
                                    + ALMPEDSC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMPEDSC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMPEDSC.id_aeasecsol
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    LEFT JOIN dbo.ALMMOVIC ON dbo.ALMPEDSC.id_pedsc = dbo.ALMMOVIC.id_pedsc
                            WHERE   ( ( fecha_ped < @fecha_cerrar
                                        AND fecha_cont < @fecha_cerrar
                                        AND fecha_cont IS NOT NULL
                                      )
                                      OR ( fecha_ped < @fecha_cerrar
                                           AND fecha_cont IS NULL
                                         )
                                    )
                                    AND ( ALMPEDSC.estado = 1
                                          OR ALMPEDSC.estado = 6
                                        )	               
                END
	    
			--ALMMOVIC
            IF ( SELECT COUNT(*)
                 FROM   ALMMOVIC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
							
                            )
                    VALUES  ( 'Existen operaciones de movimiento pendientes de actualizar con fecha de contabilización menor a la del cierre:' 							
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                            SELECT  'Movimiento consecutivo:'
                                    + ALMMOVIC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMMOVIC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMMOVIC.id_aeasecorig
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
	               
                END
	               
		   --ALMGASTC
            IF ( SELECT COUNT(*)
                 FROM   ALMGASTC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de gastos pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Gasto consecutivo:'
                                    + dbo.ALMGASTC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMGASTC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMGASTC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
                END
	            
			--ALMVENTC
            IF ( SELECT COUNT(*)
                 FROM   ALMVENTC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de ventas pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Venta consecutivo:'
                                    + dbo.ALMVENTC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMVENTC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMVENTC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
                END
	                      
			--ALMINVEC
            IF ( SELECT COUNT(*)
                 FROM   ALMINVEC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de inventario pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Inventario consecutivo:'
                                    + ALMINVEC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMINVEC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMINVEC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
                END
	         
			--ALMDESPC
            IF ( SELECT COUNT(*)
                 FROM   ALMDESPC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN 
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de despiece pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Despiece consecutivo:'
                                    + ALMDESPC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMDESPC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMDESPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
                END
	            
			--ALMESCEC
            IF ( SELECT COUNT(*)
                 FROM   ALMESCEC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN 
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de escandallo pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Escandallo consecutivo:'
                                    + ALMESCEC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMESCEC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMESCEC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
                END
	            
			--ALMCAMBC
            IF ( SELECT COUNT(*)
                 FROM   ALMCAMBC
                 WHERE  fecha_cont < @fecha_cerrar
                        AND ( estado = 1
                              OR estado = 6
                            )
               ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de cambio código pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Cambio código consecutivo:'
                                    + ALMCAMBC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    ALMCAMBC
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMCAMBC.id_almacen
                            WHERE   fecha_cont < @fecha_cerrar
                                    AND ( estado = 1
                                          OR estado = 6
                                        )
                END
	            
			--ALMENTRBC
            IF ( SELECT COUNT(*)
                 FROM   ALMENTRC
                 WHERE  fecha_cont < @fecha_cerrar ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de rebaja automática pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Rebaja automática consecutivo:'
                                    + ALMENTRC.consecutiv + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMENTRC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMENTRC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   fecha_cont < @fecha_cerrar
                                    
                END
	         
		-- 20181205. PAZO. ANADI TABLA DE ENTRADA DE VENTAS DE CAJA REGISTRADORA
	            
			--ALMENTVC
            IF ( SELECT COUNT(*)
                 FROM   ALMENTVC
                 WHERE  fecha_cont < @fecha_cerrar ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen operaciones de venta de caja registradora pendientes de actualizar con fecha de contabilización menor a la del cierre:' 
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  'Venta de Caja Registradora consecutivo:'
                                    + ALMENTVC.consecutiv + 'Caja:' 
									+ LTRIM(RTRIM(ALMNCAJA.cod_caja)) + '/'
									+ LTRIM(RTRIM(ALMNCAJA.desc_caja))
									+ ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:'
                                    + LTRIM(RTRIM(ALMNSECC.cod_seccion)) + '/'
                                    + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                            FROM    ALMENTVC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMENTVC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
									INNER JOIN dbo.ALMNCAJA ON dbo.ALMNCAJA.id_caja = dbo.ALMENTVC.id_caja
                            WHERE   fecha_cont < @fecha_cerrar
                                    
                END
	         -- HASTA AQUI LO ANADIDO
			            
			--//2.Verificar no existan diferencias en existencias entre las tablas ALMSTOCC y ALMSUBMC--//           
            SELECT  SUM(CASE WHEN ( entrada = 0 ) THEN -cantidad
                             ELSE cantidad
                        END) AS existencia_sub ,
                    ALMSUBMC.id_stocc ,
                    ISNULL(ALMSTOCL.existencia, 0) AS existencia_real
            INTO    #tmp_cantidad
            FROM    dbo.ALMSUBMC
                    INNER JOIN dbo.ALMSTOCC ON dbo.ALMSTOCC.id_stocc = dbo.ALMSUBMC.id_stocc
                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMSTOCC.id_aeasec
                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                    LEFT JOIN dbo.ALMSTOCL ON dbo.ALMSTOCL.id_stocc = dbo.ALMSTOCC.id_stocc
            WHERE   fecha_cont <= ALMNALMA.fecha_umov
            GROUP BY ALMSUBMC.id_stocc ,
                    ISNULL(ALMSTOCL.existencia, 0)
            ORDER BY ALMSUBMC.id_stocc

            IF ( SELECT COUNT(*)
                 FROM   #tmp_cantidad
                 WHERE  existencia_sub <> existencia_real
               ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 	
                            )
                    VALUES  ( 'Existen diferencias de cantidad entre inventario y submayor, ejecute la opción de Ajuste del Submayor.' 		
                            )
                END 

            DROP TABLE #tmp_cantidad
			
			--//3.Verificar no existan diferencias en importes por monedas entre las tablas ALMSTOCC y ALMSUBMC--//  
            SELECT  SUM(CASE WHEN ( entrada = 0 ) THEN -importe
                             ELSE importe
                        END) AS importe_sub ,
                    ALMSUBMC.id_stocc ,
                    ALMSUBML.id_emone ,
                    ISNULL(ALMSTOCD.importe_arti, 0) AS importe_real
            INTO    #tmp_valor
            FROM    dbo.ALMSUBMC
                    INNER JOIN dbo.ALMSUBML ON dbo.ALMSUBML.id_subart = dbo.ALMSUBMC.id_subart
                    INNER JOIN dbo.ALMSTOCC ON dbo.ALMSTOCC.id_stocc = dbo.ALMSUBMC.id_stocc
                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMSTOCC.id_aeasec
                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                    LEFT JOIN dbo.ALMSTOCL ON dbo.ALMSTOCL.id_stocc = dbo.ALMSTOCC.id_stocc
                    LEFT JOIN dbo.ALMSTOCD ON dbo.ALMSTOCD.id_stocl = dbo.ALMSTOCL.id_stocl
                                              AND dbo.ALMSTOCD.id_emone = dbo.ALMSUBML.id_emone
            WHERE   fecha_cont <= ALMNALMA.fecha_umov
            GROUP BY ALMSUBMC.id_stocc ,
                    ALMSUBML.id_emone ,
                    ISNULL(ALMSTOCD.importe_arti, 0)
            ORDER BY ALMSUBMC.id_stocc

            IF ( SELECT COUNT(*)
                 FROM   #tmp_valor
                 WHERE  importe_sub <> importe_real
               ) > 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen diferencias de valor entre inventario y submayor, ejecute la opción de Ajuste del Submayor.' 		
                            )
                END 

            DROP TABLE #tmp_valor

			--//4.Para todos los almacenes que contabilizan verificar que el saldo de ALMSTOCC sea igual al saldo 
			--//de las cuentas contables con las que se tienen enlaces contables en las cuentas de inventario--//  
            IF ( SELECT SUM(diferencia)
                 FROM   V_Saldo_Stocc_CtasTodo
               ) != 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay diferencias entre inventario y contabilidad.' 
                            )
                END
	            
			--//5.Validar para todos los registros de ALMSTOCC que estén activos y cuyo almacen tiene el parámetro contabiliz = 1, 
			--//que tengan definidas sus cuentas contables 
            DECLARE Enlace_Contable CURSOR
            FOR
                SELECT  ALMSTOCC.id_arti ,
                        ALMSTOCC.id_aeasec ,
                        ALMEMONE.id_emone ,
                        ALMEMONE.id_empresa ,
                        ALMEMONE.id_moneda
                FROM    dbo.ALMSTOCC
                        INNER JOIN dbo.ALMSTOCL ON dbo.ALMSTOCC.id_stocc = dbo.ALMSTOCL.id_stocc
                        INNER JOIN dbo.ALMSTOCD ON dbo.ALMSTOCL.id_stocl = dbo.ALMSTOCD.id_stocl
                        INNER JOIN dbo.ALMEMONE ON dbo.ALMSTOCD.id_emone = dbo.ALMEMONE.id_emone
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMSTOCC.id_aeasec = dbo.ALMEASEC.id_aeasec
                        INNER JOIN dbo.almpalma ON dbo.ALMEASEC.id_almacen = dbo.ALMPALMA.id_almacen
                WHERE   ALMSTOCC.activo = 1
                        AND contabiliza = 1
	            
            OPEN Enlace_Contable    
            FETCH NEXT FROM Enlace_Contable INTO @id_arti, @id_aeasec,
                @id_emone, @id_empr, @id_moneda
            WHILE @@FETCH_STATUS = 0
                BEGIN
	            
                    SET @id_ecgpo = NULL 
                    SET @id_ctainv = NULL 
                    SET @id_ctacosto = NULL 
                    SET @id_ctagasto = NULL
                    SET @id_ctadesg = NULL 
                    SET @id_ctaingreso = NULL
	                
                    SELECT  @id_ecgpo = gpo.id_ecgpo ,
                            @id_ctainv = ISNULL(gpo.id_ctainv, 0) ,
                            @id_ctacosto = ISNULL(gpo.id_ctacosto, 0) ,
                            @id_ctagasto = ISNULL(gpo.id_ctagasto, 0) ,
                            @id_ctadesg = ISNULL(gpo.id_ctadesg, 0) ,
                            @id_ctaingreso = ISNULL(gpo.id_ctaingreso, 0)
                    FROM    almnarti arti
                            INNER JOIN ALMNSFAM nsfam ON arti.id_sfami = nsfam.id_sfami
                            INNER JOIN ALMNFAMI nfami ON nsfam.id_fami = nfami.id_fami
                            INNER JOIN ALMNGRUP ngrupo ON ngrupo.id_grupo = nfami.id_grupo
                            INNER JOIN ALMNCATE ncate ON ncate.id_cat = ngrupo.id_cat
                            INNER JOIN ( SELECT ecgpo.id_ecgpo ,
                                                ecgpo.id_emone ,
                                                ecgpo.id_aeasec ,
                                                ngrupoDesde.cod_grupo gdesde ,
                                                ngrupoHasta.cod_grupo ghasta ,
                                                nfamiDesde.cod_fami fdesde ,
                                                nfamiHasta.cod_fami fhasta ,
                                                nsfamDesde.cod_sfami sdesde ,
                                                nsfamHasta.cod_sfami shasta ,
                                                ecgpo.id_ctainv ,
                                                ecgpo.id_ctacosto ,
                                                ecgpo.id_ctagasto ,
                                                ecgpo.id_ctadesg ,
                                                ecgpo.id_ctaingreso ,
                                                ncateDesde.cod_cat dcod_cat ,
                                                ncateHasta.cod_cat hcod_cat
                                         FROM   ALMECGPO ecgpo
                                                INNER JOIN ALMEASEC easec ON ecgpo.id_aeasec = easec.id_aeasec
                                                INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                                                INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                                                INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                                                INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                                                INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                                                INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
                                                INNER JOIN ALMNCATE AS ncateDesde ON ncateDesde.id_cat = ngrupoDesde.id_cat
                                                INNER JOIN ALMNCATE AS ncateHasta ON ncateHasta.id_cat = ngrupoHasta.id_cat
                                         WHERE  easec.id_aeasec = @id_aeasec
                                                AND ecgpo.activo = 1
                                       ) gpo ON CONVERT(INT, ( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) >= CONVERT(INT, ( LTRIM(RTRIM(gpo.dcod_cat))
                                                              + LTRIM(RTRIM(gpo.gdesde))
                                                              + LTRIM(RTRIM(gpo.fdesde))
                                                              + LTRIM(RTRIM(gpo.sdesde)) ))
                                                AND CONVERT(INT, ( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) <= CONVERT(INT, ( LTRIM(RTRIM(gpo.hcod_cat))
                                                              + LTRIM(RTRIM(gpo.ghasta))
                                                              + LTRIM(RTRIM(gpo.fhasta))
                                                              + LTRIM(RTRIM(gpo.shasta)) ))
                                                AND LEN(( LTRIM(RTRIM(ncate.cod_cat))
                                                          + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                          + LTRIM(RTRIM(nfami.cod_fami))
                                                          + LTRIM(RTRIM(nsfam.cod_sfami)) )) = LEN(( LTRIM(RTRIM(gpo.dcod_cat))
                                                              + LTRIM(RTRIM(gpo.gdesde))
                                                              + LTRIM(RTRIM(gpo.fdesde))
                                                              + LTRIM(RTRIM(gpo.sdesde)) ))
                                                AND LEN(( LTRIM(RTRIM(ncate.cod_cat))
                                                          + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                          + LTRIM(RTRIM(nfami.cod_fami))
                                                          + LTRIM(RTRIM(nsfam.cod_sfami)) )) = LEN(( LTRIM(RTRIM(gpo.hcod_cat))
                                                              + LTRIM(RTRIM(gpo.ghasta))
                                                              + LTRIM(RTRIM(gpo.fhasta))
                                                              + LTRIM(RTRIM(gpo.shasta)) ))
                                                AND gpo.id_emone = @id_emone
                    WHERE   arti.id_arti = @id_arti

/* PAZO, 20161027, SE PUSO LTRIM(RTRIM A DESC_ARTI Y SE SUSTITUYO DESC_ARTI POR DESC_LARTI QUE A PARTIR DE AHORA SERA ESA LA DEFINITIVA POR CPTUR */	                
                    SELECT  @des_arti = LTRIM(RTRIM(cod_arti)) + '/'
                            + LTRIM(RTRIM(desc_larti))
                    FROM    dbo.ALMNARTI
                    WHERE   id_arti = @id_arti

                    SELECT  @des_almacen_seccion = 'Almacén:'
                            + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                            + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            + ' Sección:' + LTRIM(RTRIM(ALMNSECC.cod_seccion))
                            + '/' + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                    FROM    dbo.ALMEASEC
                            INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                    WHERE   id_aeasec = @id_aeasec

                    IF ( @id_ecgpo IS NULL )
                        BEGIN
							--//5.Significa que no existe el enlace contable
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                            VALUES  ( 'No existe el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                      + @des_arti + ' en el '
                                      + @des_almacen_seccion
                                    )
                        END
                    ELSE
                        BEGIN         
							--//6.Verificar las cuentas contables que se analizaron en el inciso 5, existan en la tabla CONTPLAN 
                           
                            IF ( @id_ctainv <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctainv
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctainv
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de inventario en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctainv
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de inventario esta inactiva en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	
	                            
                            IF ( @id_ctacosto <> 0 )
                                BEGIN
                                    SET @cuenta = NULL

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctacosto
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctacosto
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de costo en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctacosto
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de costo esta inactiva en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	
	                            
                            IF ( @id_ctagasto <> 0 )
                                BEGIN
                                    SET @cuenta = NULL

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctagasto
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctagasto
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de gasto en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctagasto
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de gasto esta inactiva en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	
	                            
                           /* IF ( @id_ctadesg <> 0 )
                                BEGIN
                                    SET @cuenta = NULL

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctadesg
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctadesg
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de desgaste en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctadesg
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de desgaste esta inactiva en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	*/
	                            
                            IF ( @id_ctaingreso <> 0 )
                                BEGIN
                                    SET @cuenta = NULL

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctaingreso
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctaingreso
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de ingreso en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctaingreso
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de ingreso esta inactiva en el plan de cuentas, en el enlace contable de Categoría Grupo Familia Subfamilia para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	
                        END
	                    
                    FETCH NEXT FROM Enlace_Contable INTO @id_arti, @id_aeasec,
                        @id_emone, @id_empr, @id_moneda
                END
	            
            CLOSE Enlace_Contable
            DEALLOCATE Enlace_Contable 

----- 20181206 PAZO. SE ANADE VALIDACION DE QUE LAS CUENTAS CONTABLES DE LOS ENLACES DE CAJA EXISTAN EN CONTPLAN


--		5a. Validar para todos los registros de Caja que estén activos y cuyo almacen tiene el parámetro contabiliz = 1, 
--			y que tengan definidas sus cuentas contables 

--		ENLACES DE TIPO DE COBRO
            DECLARE Enlace_Contable CURSOR
            FOR
                SELECT  ALMNCAJA.id_caja ,
						ALMNCAJA.id_aeasec , 
						ALMNTCOB.id_ntcod ,
						ALMECTCO.id_ctatcobro ,
                        ALMECTCO.id_emone 
                FROM    dbo.ALMNCAJA
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMNCAJA.id_aeasec AND dbo.ALMEASEC.activo = 1
						INNER JOIN dbo.ALMNALMA ON dbo.ALMEASEC.id_almacen = dbo.ALMNALMA.id_almacen AND dbo.ALMNALMA.activo = 1
						INNER JOIN dbo.ALMNSECC ON dbo.ALMEASEC.id_seccion = dbo.ALMNSECC.id_seccion AND dbo.ALMNSECC.activo = 1
						INNER JOIN dbo.ALMPALMA ON dbo.ALMPALMA.id_almacen = dbo.ALMNALMA.id_almacen
						INNER JOIN dbo.ALMNTCOB ON dbo.ALMNTCOB.id_caja = dbo.ALMNCAJA.id_caja AND dbo.ALMNTCOB.activo = 1
						INNER JOIN dbo.ALMECTCO ON dbo.ALMECTCO.id_caja = dbo.ALMNTCOB.id_caja AND dbo.ALMECTCO.id_ntcob = dbo.ALMNTCOB.id_ntcod AND dbo.ALMECTCO.activo = 1
                WHERE   dbo.ALMNCAJA.activo = 1 AND dbo.ALMPALMA.contabiliza = 1
	            
            OPEN Enlace_Contable    
            FETCH NEXT FROM Enlace_Contable INTO @id_caja, @id_aeasec, @id_ntcod , @id_ctatcobro, 
												  @id_emone
            WHILE @@FETCH_STATUS = 0
                BEGIN
                SET @id_ctatcobro = NULL 

				SELECT @desc_caja = 'Caja:'
							+ LTRIM(RTRIM(ALMNCAJA.cod_caja)) + '/'
							+ LTRIM(RTRIM(ALMNCAJA.desc_caja))
				    FROM dbo.ALMNCAJA
					WHERE id_caja = @id_caja
		--			                
                    SELECT  @des_almacen_seccion = 'Almacén:'
                            + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                            + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            + ' Sección:' + LTRIM(RTRIM(ALMNSECC.cod_seccion))
                            + '/' + LTRIM(RTRIM(ALMNSECC.desc_seccion))
					FROM dbo.ALMEASEC 
					INNER JOIN dbo.ALMNALMA ON dbo.ALMEASEC.id_almacen = dbo.ALMNALMA.id_almacen 
					INNER JOIN dbo.ALMNSECC ON dbo.ALMEASEC.id_seccion = dbo.ALMNSECC.id_seccion 
					WHERE dbo.ALMEASEC.id_aeasec = @id_aeasec
		--
					SELECT @desc_ntcod = 'Tipo de Cobro:'
							+ LTRIM(RTRIM(CONVERT (VARCHAR(50), dbo.ALMNTCOB.cod_ntcod))) + '/' 
							+ LTRIM(RTRIM(dbo.ALMNTCOB.desc_ntcod))
					FROM dbo.ALMNTCOB
					WHERE id_ntcod = @id_ntcod AND id_caja = @id_caja
		--
                    IF ( @id_ctatcobro IS NULL )
                        BEGIN
							--//5.Significa que no existe el enlace contable
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                            VALUES  ( 'No existe el enlace contable del Tipo de Cobro:'
                                      + @desc_ntcod + ' en la Caja '
                                      + @desc_caja
                                    )
                        END
                    ELSE
                        BEGIN         
							--//6a.Verificar la cuenta contable del tipo de cobro exista en la tabla CONTPLAN 
                           
                            IF ( @id_ctatcobro <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctatcobro
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctatcobro
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta definida para el Tipo de Cobro:'
													  + @desc_ntcod 
													  + ' en el plan de cuentas para la caja:'
                                                      + @desc_caja 
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctatcobro
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' definida para el Tipo de Cobro:' + @desc_ntcod 
													  + ' para la caja:'
													  + @desc_caja
													  + ' está inactiva en el plan de cuentas'
                                                    )
                                        END
                                END	
	                     END
				FETCH NEXT FROM Enlace_Contable INTO @id_caja, @id_aeasec, @id_ntcod , @id_ctatcobro, 
												  @id_emone

			END
            CLOSE Enlace_Contable
            DEALLOCATE Enlace_Contable 
				
--			ENLACE DE FALTANTE Y SOBRANTE
            DECLARE Enlace_Contable CURSOR
            FOR
                SELECT  ALMNCAJA.id_caja ,
						ALMECCFS.id_ctacjfal ,
						ALMECCFS.id_ctacjsob ,
                        ALMECCFS.id_emone 
                FROM    dbo.ALMNCAJA
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMNCAJA.id_aeasec AND dbo.ALMEASEC.activo = 1
						INNER JOIN dbo.ALMNALMA ON dbo.ALMEASEC.id_almacen = dbo.ALMNALMA.id_almacen AND dbo.ALMNALMA.activo = 1
						INNER JOIN dbo.ALMNSECC ON dbo.ALMEASEC.id_seccion = dbo.ALMNSECC.id_seccion AND dbo.ALMNSECC.activo = 1
						INNER JOIN dbo.ALMPALMA ON dbo.ALMPALMA.id_almacen = dbo.ALMNALMA.id_almacen
						INNER JOIN dbo.ALMECCFS ON dbo.ALMECCFS.id_caja = dbo.ALMNCAJA.id_caja AND dbo.ALMECCFS.activo = 1
                WHERE   dbo.ALMNCAJA.activo = 1 AND dbo.ALMPALMA.contabiliza = 1
	            
            OPEN Enlace_Contable    
            FETCH NEXT FROM Enlace_Contable INTO @id_caja, @id_ctacjfal , @id_ctacjsob, 
												  @id_emone
            WHILE @@FETCH_STATUS = 0
                BEGIN
                    SET @id_ctacjfal = NULL 
                    SET @id_ctacjsob = NULL 

					SELECT @desc_caja = 'Caja:'
							+ LTRIM(RTRIM(ALMNCAJA.cod_caja)) + '/'
							+ LTRIM(RTRIM(ALMNCAJA.desc_caja))
				    FROM dbo.ALMNCAJA
					WHERE id_caja = @id_caja
		--			                
                     IF ( @id_ctacjfal IS NULL ) OR (@id_ctacjsob IS NULL)
                        BEGIN
							--//5.Significa que no existe el enlace contable
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                            VALUES  ( 'No existe el enlace contable Faltante y Sobrante:'
                                      + ' en la Caja '
                                      + @desc_caja
                                    )
                        END
                    ELSE
                        BEGIN         
							--//6a.Verificar la cuenta contable de faltante exista en la tabla CONTPLAN 
                           
                            IF ( @id_ctacjfal <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctacjfal
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctacjfal
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta definida en Faltante para la caja:'
                                                      + @desc_caja 
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctacjfal
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' definida para Faltante:'  
													  + ' en la caja:'
													  + @desc_caja
													  + ' está inactiva en el plan de cuentas'
                                                    )
                                        END
                                END	
			-- sobrante
                            IF ( @id_ctacjsob <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctacjsob
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctacjsob
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta definida en Sobrante para la caja:'
                                                      + @desc_caja 
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctacjsob
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' definida para Sobrante:'  
													  + ' en la caja:'
													  + @desc_caja
													  + ' está inactiva en el plan de cuentas'
                                                    )
                                        END
                                END	
								
	                     END
				FETCH NEXT FROM Enlace_Contable INTO @id_caja, @id_ctacjfal , @id_ctacjsob, 
												  @id_emone

			END
            CLOSE Enlace_Contable
            DEALLOCATE Enlace_Contable 
  
--			ENLACE DE PORA
            DECLARE Enlace_Contable CURSOR
            FOR
                SELECT  ALMNCAJA.id_caja ,
						ALMNPORR.id_nporr ,
						ALMECPOR.id_ctaefect ,
						ALMECPOR.id_ctaingr ,
                        ALMECPOR.id_emone 
                FROM    dbo.ALMNCAJA
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMNCAJA.id_aeasec AND dbo.ALMEASEC.activo = 1
						INNER JOIN dbo.ALMNALMA ON dbo.ALMEASEC.id_almacen = dbo.ALMNALMA.id_almacen AND dbo.ALMNALMA.activo = 1
						INNER JOIN dbo.ALMPALMA ON dbo.ALMPALMA.id_almacen = dbo.ALMNALMA.id_almacen
						INNER JOIN dbo.ALMNPORR ON dbo.ALMNPORR.id_caja = dbo.ALMNCAJA.id_caja 
						INNER JOIN dbo.ALMECPOR ON dbo.ALMECPOR.id_caja = dbo.ALMNCAJA.id_caja AND dbo.ALMECPOR.id_nporr = dbo.ALMNPORR.id_nporr AND dbo.ALMECPOR.activo = 1

                WHERE   dbo.ALMNCAJA.activo = 1 AND dbo.ALMPALMA.contabiliza = 1
	            
            OPEN Enlace_Contable    
            FETCH NEXT FROM Enlace_Contable INTO @id_caja, @id_nporr, @id_ctaefect , @id_ctaingr, 
												  @id_emone
            WHILE @@FETCH_STATUS = 0
                BEGIN
                    SET @id_ctaefect = NULL
                    SET @id_ctaingr = NULL 

					SELECT @desc_caja = 'Caja:'
							+ LTRIM(RTRIM(ALMNCAJA.cod_caja)) + '/'
							+ LTRIM(RTRIM(ALMNCAJA.desc_caja))
				    FROM dbo.ALMNCAJA
					WHERE id_caja = @id_caja
		--			 
					SELECT @desc_nporr = 'Pora:'
							+ LTRIM(RTRIM(CONVERT(VARCHAR(50), ALMNPORR.cod_nporr))) + '/'
							+ LTRIM(RTRIM(ALMNPORR.desc_nporr))
					FROM dbo.ALMNPORR
					WHERE id_caja = @id_caja AND id_nporr = @id_nporr
					
                     IF ( @id_ctaefect IS NULL ) OR (@id_ctaingr IS NULL)
                        BEGIN
							--//5.Significa que no existe el enlace contable
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                            VALUES  ( 'No existe el enlace contable de Pora:'
									  + @desc_nporr
                                      + ' en la Caja '
                                      + @desc_caja
                                    )
                        END
                    ELSE
                        BEGIN         
							--//6a.Verificar la cuenta contable de faltante exista en la tabla CONTPLAN 
                           
                            IF ( @id_ctaefect <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctaefect
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctaefect
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No está definida la cuenta de Efectivo de la Pora:'
													  + @desc_nporr
													  + ' para la caja:'
                                                      + @desc_caja 
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctaefect
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' definida para Efectivo:'  
													  + ' de la Pora:'
													  + @desc_nporr
													  + ' en la caja:'
													  + @desc_caja
													  + ' está inactiva en el plan de cuentas'
                                                    )
                                        END
                                END	
			-- ingreso
                            IF ( @id_ctaingr <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctaingr
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctaingr
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta definida en Ingreso para la caja:'
                                                      + @desc_caja 
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctaingr
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' definida para Ingreso:'  
													  + ' en la caja:'
													  + @desc_caja
													  + ' está inactiva en el plan de cuentas'
                                                    )
                                        END
                                END	
								
	                     END
				FETCH NEXT FROM Enlace_Contable INTO @id_caja, @id_ctaefect , @id_ctaingr, 
												  @id_emone

			END
            CLOSE Enlace_Contable
            DEALLOCATE Enlace_Contable 
    
----- 20181206 PAZO. SE ANADE VALIDACION DE QUE LAS CUENTAS CONTABLES DE LOS ENLACES DE CAJA EXISTAN EN CONTPLAN


	        
			--//8.Verificar las monedas que existen en ALMEMONE y estén activas, existan en SICLAMON y tengan el campo eliminado = 0	
            IF ( SELECT COUNT(ALMEMONE.id_moneda)
                 FROM   dbo.ALMEMONE
                 WHERE  ALMEMONE.activo = 1
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.SICLAMON
                                         WHERE  SICLAMON.id_mone = ALMEMONE.id_moneda
                                                AND eliminado = 0 )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'La empresa contable no existe o esta inactiva.'    
                            )
                END		
	            
			--9.Verificar que las empresas que existen en ALMEMONE y estén activas, existan en CONTEMPR y estén activas.
            IF ( SELECT COUNT(ALMEMONE.id_empresa)
                 FROM   dbo.ALMEMONE
                 WHERE  activo = 1
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.CONTEMPR
                                         WHERE  CONTEMPR.id_empr = ALMEMONE.id_empresa
                                                AND CONTEMPR.activa = 1 )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen empresas contables utilizadas en ZunStock que no existen o están inactivas.'                       	
                            )
                END	
	            
			--//10.Verificar que la empresa/moneda que está como reservada=1 en el ALMEMONE coincida con la empresa/moneda que tiene el CONTEMPR.    
            IF NOT EXISTS ( SELECT  CONTEMPR.id_empr
                            FROM    dbo.ALMEMONE
                                    INNER JOIN CONTEMPR ON CONTEMPR.id_empr = ALMEMONE.id_empresa
                                                           AND CONTEMPR.id_mone = ALMEMONE.id_moneda
                            WHERE   CONTEMPR.activa = 1
                                    AND ALMEMONE.activo = 1
                                    AND reservado = 1 )
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'La empresa contable/moneda definida como reservada en ZunStock no existe en contabilidad.'                       
                            )
                END	 
	             
			--//11.Partiendo de ALMEAPRV para los casos en q el almacen tiene el parámetro de contabiliz=1 y el 
			--//registro de enlace almacen/proveedor este activo, verificar exista enlace contable de dichos proveedores y este activo   
            IF ( SELECT COUNT(DISTINCT id_prov)
                 FROM   almeaprv
                        INNER JOIN dbo.ALMPALMA ON dbo.ALMEAPRV.id_almacen = dbo.ALMPALMA.id_almacen
                 WHERE  ALMEAPRV.activo = 1
                        AND ALMPALMA.activo = 1
                        AND contabiliza = 1
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.ALMECPRV
                                         WHERE  ALMECPRV.id_prov = ALMEAPRV.id_prov )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Existen proveedores que no tienen enlaces contables o están inactivos:'                       			
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                            SELECT DISTINCT
                                    'Proveedor: '
                                    + LTRIM(RTRIM(ALMNPROV.cod_prov)) + '/'
                                    + LTRIM(RTRIM(ALMNPROV.desc_prov))
                            FROM    almeaprv
                                    INNER JOIN dbo.ALMPALMA ON dbo.ALMEAPRV.id_almacen = dbo.ALMPALMA.id_almacen
                                    INNER JOIN dbo.ALMNPROV ON dbo.ALMNPROV.id_prov = dbo.ALMEAPRV.id_prov
                            WHERE   ALMEAPRV.activo = 1
                                    AND ALMPALMA.activo = 1
                                    AND contabiliza = 1
                                    AND NOT EXISTS ( SELECT *
                                                     FROM   dbo.ALMECPRV
                                                     WHERE  ALMECPRV.id_prov = ALMEAPRV.id_prov )
                END
	            
			--//12.Verificar las cuentas contables de los enlaces de proveedores (pto 11) existan en CONTPLAN y estén activas
            DECLARE Enlace_Contable_Prov CURSOR
            FOR
                SELECT  ALMECPRV.id_prov ,
                        ALMECPRV.id_emone ,
                        ALMECPRV.id_ctaxpagar ,
                        ALMECPRV.id_ctarancel ,
                        ALMECPRV.id_ctamanip ,
                        ALMECPRV.id_ctaflete ,
                        ALMECPRV.id_ctaemb ,
                        ALMEMONE.id_empresa
                FROM    dbo.ALMECPRV
                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECPRV.id_emone = dbo.ALMEMONE.id_emone
                        INNER JOIN ( SELECT  DISTINCT
                                            id_prov
                                     FROM   almeaprv
                                            INNER JOIN dbo.ALMPALMA ON dbo.ALMEAPRV.id_almacen = dbo.ALMPALMA.id_almacen
                                     WHERE  ALMEAPRV.activo = 1
                                            AND ALMPALMA.activo = 1
                                            AND contabiliza = 1
                                   ) e ON dbo.ALMECPRV.id_prov = e.id_prov
                WHERE   ALMECPRV.activo = 1
	            
            OPEN Enlace_Contable_Prov    
            FETCH NEXT FROM Enlace_Contable_Prov INTO @id_prov, @id_emone,
                @id_ctaxpagar, @id_ctarancel, @id_ctamanip, @id_ctaflete,
                @id_ctaemb, @id_empr
            WHILE @@FETCH_STATUS = 0
                BEGIN
                    DECLARE @proveedor VARCHAR(255)

                    SELECT  @proveedor = LTRIM(RTRIM(ALMNPROV.cod_prov)) + '/'
                            + LTRIM(RTRIM(ALMNPROV.desc_prov))
                    FROM    dbo.ALMNPROV
                    WHERE   id_prov = @id_prov
					

                    IF ( ISNULL(@id_ctaemb, 0) <> 0 )
                        BEGIN
                            SET @cuenta = NULL;

                            SELECT  @cuenta = LTRIM(RTRIM(cuenta)) + '/'
                                    + LTRIM(RTRIM(tit_cta))
                            FROM    CONTPLAN
                            WHERE   id_cuenta = @id_ctaemb
                                    AND id_empr = @id_empr

                            IF ( NOT EXISTS ( SELECT    *
                                              FROM      CONTPLAN
                                              WHERE     id_cuenta = @id_ctaemb
                                                        AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'No existe la cuenta de embalaje en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END

                            IF ( @cuenta != NULL
                                 AND NOT EXISTS ( SELECT    *
                                                  FROM      CONTPLAN
                                                  WHERE     activa = 1
                                                            AND id_cuenta = @id_ctaemb
                                                            AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'La cuenta:' + @cuenta
                                              + ' de embalaje esta inactiva en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END
                        END
                        
	                    
                    IF ( ISNULL(@id_ctaflete, 0) <> 0 )
                        BEGIN
                            SET @cuenta = NULL;

                            SELECT  @cuenta = LTRIM(RTRIM(cuenta)) + '/'
                                    + LTRIM(RTRIM(tit_cta))
                            FROM    CONTPLAN
                            WHERE   id_cuenta = @id_ctaflete
                                    AND id_empr = @id_empr

                            IF ( NOT EXISTS ( SELECT    *
                                              FROM      CONTPLAN
                                              WHERE     id_cuenta = @id_ctaflete
                                                        AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'No existe la cuenta de flete en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END

                            IF ( @cuenta != NULL
                                 AND NOT EXISTS ( SELECT    *
                                                  FROM      CONTPLAN
                                                  WHERE     activa = 1
                                                            AND id_cuenta = @id_ctaflete
                                                            AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'La cuenta:' + @cuenta
                                              + ' de flete esta inactiva en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END
                        END
	                    
                    IF ( ISNULL(@id_ctamanip, 0) <> 0 )
                        BEGIN
                            SET @cuenta = NULL;

                            SELECT  @cuenta = LTRIM(RTRIM(cuenta)) + '/'
                                    + LTRIM(RTRIM(tit_cta))
                            FROM    CONTPLAN
                            WHERE   id_cuenta = @id_ctamanip
                                    AND id_empr = @id_empr

                            IF ( NOT EXISTS ( SELECT    *
                                              FROM      CONTPLAN
                                              WHERE     id_cuenta = @id_ctamanip
                                                        AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'No existe la cuenta de impuesto en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END

                            IF ( @cuenta != NULL
                                 AND NOT EXISTS ( SELECT    *
                                                  FROM      CONTPLAN
                                                  WHERE     activa = 1
                                                            AND id_cuenta = @id_ctamanip
                                                            AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'La cuenta:' + @cuenta
                                              + ' de impuesto esta inactiva en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END
                        END
	                    
                    IF ( ISNULL(@id_ctarancel, 0) <> 0 )
                        BEGIN
                            SET @cuenta = NULL;

                            SELECT  @cuenta = LTRIM(RTRIM(cuenta)) + '/'
                                    + LTRIM(RTRIM(tit_cta))
                            FROM    CONTPLAN
                            WHERE   id_cuenta = @id_ctarancel
                                    AND id_empr = @id_empr

                            IF ( NOT EXISTS ( SELECT    *
                                              FROM      CONTPLAN
                                              WHERE     id_cuenta = @id_ctarancel
                                                        AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'No existe la cuenta de arancel en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END

                            IF ( @cuenta != NULL
                                 AND NOT EXISTS ( SELECT    *
                                                  FROM      CONTPLAN
                                                  WHERE     activa = 1
                                                            AND id_cuenta = @id_ctarancel
                                                            AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'La cuenta:' + @cuenta
                                              + ' de arancel esta inactiva en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END
                        END
	                            
                    IF ( ISNULL(@id_ctaxpagar, 0) <> 0 )
                        BEGIN
                            SET @cuenta = NULL;

                            SELECT  @cuenta = LTRIM(RTRIM(cuenta)) + '/'
                                    + LTRIM(RTRIM(tit_cta))
                            FROM    CONTPLAN
                            WHERE   id_cuenta = @id_ctaxpagar
                                    AND id_empr = @id_empr

                            IF ( NOT EXISTS ( SELECT    *
                                              FROM      CONTPLAN
                                              WHERE     id_cuenta = @id_ctaxpagar
                                                        AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'No existe la cuenta por pagar en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END

                            IF ( @cuenta != NULL
                                 AND NOT EXISTS ( SELECT    *
                                                  FROM      CONTPLAN
                                                  WHERE     activa = 1
                                                            AND id_cuenta = @id_ctaxpagar
                                                            AND id_empr = @id_empr )
                               )
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error 
                                            )
                                    VALUES  ( 'La cuenta:' + @cuenta
                                              + ' por pagar esta inactiva en el plan de cuentas para el proveedor:'
                                              + @proveedor
                                            )
                                END
                        END	
	                    
                    FETCH NEXT FROM Enlace_Contable_Prov INTO @id_prov,
                        @id_emone, @id_ctaxpagar, @id_ctarancel, @id_ctamanip,
                        @id_ctaflete, @id_ctaemb, @id_empr
                END
	            
            CLOSE Enlace_Contable_Prov
            DEALLOCATE Enlace_Contable_Prov
	        
	        
			--//13. Para el caso de los almacenes que tienen el parámetro contabiliz=1 y existen en 
			--//ALMSTOCC registros activos, donde el aeasec se corresponda con una seccion del tipo Almacenaje, 
			--//verificar que para ese aeasec y rango de gpo/familia/subfamilia del ALMSTOCC existan y estén activos 
			--//sus correspondientes enlaces contables de faltantes y sobrantes en la tabla ALMECFSB
          DECLARE Enlace_Contable_Faltante CURSOR
            FOR
                SELECT  ALMSTOCC.id_arti ,
                        ALMSTOCC.id_aeasec ,
                        ALMEMONE.id_emone ,
                        ALMEMONE.id_empresa
                FROM    dbo.ALMSTOCC
                        INNER JOIN dbo.ALMSTOCL ON dbo.ALMSTOCC.id_stocc = dbo.ALMSTOCL.id_stocc
                        INNER JOIN dbo.ALMSTOCD ON dbo.ALMSTOCL.id_stocl = dbo.ALMSTOCD.id_stocl
                        INNER JOIN dbo.ALMEMONE ON dbo.ALMSTOCD.id_emone = dbo.ALMEMONE.id_emone
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMSTOCC.id_aeasec = dbo.ALMEASEC.id_aeasec
                        INNER JOIN dbo.ALMPALMA ON dbo.ALMEASEC.id_almacen = dbo.ALMPALMA.id_almacen
                WHERE   contabiliza = 1
                        AND tipo_seccion = 1
                        AND ALMSTOCC.activo = 1
	            
            OPEN Enlace_Contable_Faltante    
            FETCH NEXT FROM Enlace_Contable_Faltante INTO @id_arti, @id_aeasec,
                @id_emone, @id_empr
            WHILE @@FETCH_STATUS = 0 
                BEGIN
	            
                    SET @id_ecfsb = NULL
                    SET @id_ctafaltant = NULL
                    SET @id_ctasobr = NULL
	                
                  /*  SELECT  @id_ecfsb = gpo.id_ecfsb ,
                            @id_ctafaltant = ISNULL(gpo.id_ctafaltant, 0) ,
                            @id_ctasobr = ISNULL(gpo.id_ctasobr, 0)
                    FROM    almnarti arti
                            INNER JOIN ALMNSFAM nsfam ON arti.id_sfami = nsfam.id_sfami
                            INNER JOIN ALMNFAMI nfami ON nsfam.id_fami = nfami.id_fami
                            INNER JOIN ALMNGRUP ngrupo ON ngrupo.id_grupo = nfami.id_grupo
                            INNER JOIN ALMNCATE ncate ON ncate.id_cat = ngrupo.id_cat
                            INNER JOIN ( SELECT cccsb.id_ecfsb ,
                                                cccsb.id_emone ,
                                                cccsb.id_aeasec ,
                                                ngrupoDesde.cod_grupo gdesde ,
                                                ngrupoHasta.cod_grupo ghasta ,
                                                nfamiDesde.cod_fami fdesde ,
                                                nfamiHasta.cod_fami fhasta ,
                                                nsfamDesde.cod_sfami sdesde ,
                                                nsfamHasta.cod_sfami shasta ,
                                                cccsb.id_ctafaltant ,
                                                cccsb.id_ctasobr ,
                                                ncateDesde.cod_cat dcod_cat ,
                                                ncateHasta.cod_cat hcod_cat
                                         FROM   ALMECFSB cccsb
                                                INNER JOIN ALMEASEC easec ON cccsb.id_aeasec = easec.id_aeasec
                                                INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                                                INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                                                INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                                                INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                                                INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                                                INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
                                                INNER JOIN ALMNCATE AS ncateDesde ON ncateDesde.id_cat = ngrupoDesde.id_cat
                                                INNER JOIN ALMNCATE AS ncateHasta ON ncateHasta.id_cat = ngrupoHasta.id_cat
                                         WHERE  easec.id_aeasec = @id_aeasec
                                                AND cccsb.activo = 1
                                       ) gpo ON CONVERT(INT, ( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) >= CONVERT(INT, ( LTRIM(RTRIM(gpo.dcod_cat))
                                                              + LTRIM(RTRIM(gpo.gdesde))
                                                              + LTRIM(RTRIM(gpo.fdesde))
                                                              + LTRIM(RTRIM(gpo.sdesde)) ))
                                                AND CONVERT(INT, ( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) <= CONVERT(INT, ( LTRIM(RTRIM(gpo.hcod_cat))
                                                              + LTRIM(RTRIM(gpo.ghasta))
                                                              + LTRIM(RTRIM(gpo.fhasta))
                                                              + LTRIM(RTRIM(gpo.shasta)) ))
                                                AND LEN(( LTRIM(RTRIM(ncate.cod_cat))
                                                          + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                          + LTRIM(RTRIM(nfami.cod_fami))
                                                          + LTRIM(RTRIM(nsfam.cod_sfami)) )) = LEN(( LTRIM(RTRIM(gpo.dcod_cat))
                                                              + LTRIM(RTRIM(gpo.gdesde))
                                                              + LTRIM(RTRIM(gpo.fdesde))
                                                              + LTRIM(RTRIM(gpo.sdesde)) ))
                                                AND LEN(( LTRIM(RTRIM(ncate.cod_cat))
                                                          + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                          + LTRIM(RTRIM(nfami.cod_fami))
                                                          + LTRIM(RTRIM(nsfam.cod_sfami)) )) = LEN(( LTRIM(RTRIM(gpo.hcod_cat))
                                                              + LTRIM(RTRIM(gpo.ghasta))
                                                              + LTRIM(RTRIM(gpo.fhasta))
                                                              + LTRIM(RTRIM(gpo.shasta)) ))
                                                AND gpo.id_emone = @id_emone
                    WHERE   arti.id_arti = @id_arti

/* PAZO, 20161027, SE PUSO LTRIM(RTRIM A DESC_ARTI Y SE SUSTITUYO DESC_ARTI POR DESC_LARTI QUE A PARTIR DE AHORA SERA ESA LA DEFINITIVA POR CPTUR */	                
                    SELECT  @des_arti = LTRIM(RTRIM(cod_arti)) + '/'
                            + LTRIM(RTRIM(desc_larti))
                    FROM    dbo.ALMNARTI
                    WHERE   id_arti = @id_arti

                    SELECT  @des_almacen_seccion = 'Almacén:'
                            + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                            + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            + ' Sección:' + LTRIM(RTRIM(ALMNSECC.cod_seccion))
                            + '/' + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                    FROM    dbo.ALMEASEC
                            INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                    WHERE   id_aeasec = @id_aeasec

                    IF ( @id_ecfsb IS NULL )
                        BEGIN
							--//13.Significa que no existe el enlace contable
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                            VALUES  ( 'No existe o esta inactivo el enlace contable de Faltantes/Sobrantes para el producto:'
                                      + @des_arti + ' en el '
                                      + @des_almacen_seccion
                                    )
                        END  
                    ELSE */
                        BEGIN          
							--//Verificar las cuentas contables que se analizaron en el inciso 13, existan en la tabla CONTPLAN 
                            IF ( @id_ctafaltant <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctafaltant
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctafaltant
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de faltante en el plan de cuentas, en el enlace de Faltantes/Sobrantes para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctafaltant
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de faltante esta inactiva en el plan de cuentas, en el enlace contable de Faltantes/Sobrantes para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	
	                            
                            IF ( @id_ctasobr <> 0 )
                                BEGIN
                                    SET @cuenta = NULL;

                                    SELECT  @cuenta = LTRIM(RTRIM(cuenta))
                                            + '/' + LTRIM(RTRIM(tit_cta))
                                    FROM    CONTPLAN
                                    WHERE   id_cuenta = @id_ctasobr
                                            AND id_empr = @id_empr

                                    IF ( NOT EXISTS ( SELECT  *
                                                      FROM    CONTPLAN
                                                      WHERE   id_cuenta = @id_ctasobr
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'No existe la cuenta de sobrante en el plan de cuentas, en el enlace de Faltantes/Sobrantes para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END

                                    IF ( @cuenta != NULL
                                         AND NOT EXISTS ( SELECT
                                                              *
                                                          FROM
                                                              CONTPLAN
                                                          WHERE
                                                              activa = 1
                                                              AND id_cuenta = @id_ctasobr
                                                              AND id_empr = @id_empr )
                                       )
                                        BEGIN
                                            INSERT  INTO ##cierre_error
                                                    ( mensaje_error 
                                                    )
                                            VALUES  ( 'La cuenta:' + @cuenta
                                                      + ' de sobrante esta inactiva en el plan de cuentas, en el enlace contable de Faltantes/Sobrantes para el producto:'
                                                      + @des_arti + ' en el '
                                                      + @des_almacen_seccion
                                                    )
                                        END
                                END	
                        END
	                    
                    FETCH NEXT FROM Enlace_Contable_Faltante INTO @id_arti,
                        @id_aeasec, @id_emone, @id_empr
                END
	            
            CLOSE Enlace_Contable_Faltante
            DEALLOCATE Enlace_Contable_Faltante    
	        
			--//14.	Los enlaces contables que existan de Clientes, Conceptos de Gastos, o Impuestos y estén activos 
			--//(tablas ALMECCLI, ALMECPGA, ALMECIMP) validar existan en CONTPLAN sus id_cuenta y estén activas.    
            IF ( SELECT COUNT(ALMECCLI.id_cliente)
                 FROM   dbo.ALMECCLI
                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECCLI.id_emone = dbo.ALMEMONE.id_emone
                 WHERE  ALMECCLI.activo = 1
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.CONTPLAN
                                         WHERE  dbo.CONTPLAN.activa = 1
                                                AND dbo.CONTPLAN.id_cuenta = almeccli.id_ctacliente
                                                AND ALMEMONE.id_empresa = dbo.CONTPLAN.id_empr )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error                         
                            )
                    VALUES  ( 'En el enlace de Clientes la cuenta no esta en el plan de cuenta o esta inactiva:'     
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error                         
                            )
                            SELECT  DISTINCT
                                    'Cliente:'
                                    + LTRIM(RTRIM(ALMNCLIE.cod_cliente)) + '/'
                                    + LTRIM(RTRIM(ALMNCLIE.desc_cliente))
                                    + ' Cuenta:'
                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                         'NO EXISTE'))) + '/'
                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                         'NO EXISTE')))
                            FROM    dbo.ALMECCLI
                                    INNER JOIN dbo.ALMEMONE ON dbo.ALMECCLI.id_emone = dbo.ALMEMONE.id_emone
                                    INNER JOIN dbo.ALMNCLIE ON dbo.ALMNCLIE.id_cliente = dbo.ALMECCLI.id_cliente
                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = almeccli.id_ctacliente
                            WHERE   ALMECCLI.activo = 1
                                    AND NOT EXISTS ( SELECT *
                                                     FROM   dbo.CONTPLAN
                                                     WHERE  dbo.CONTPLAN.activa = 1
                                                            AND dbo.CONTPLAN.id_cuenta = almeccli.id_ctacliente
                                                            AND ALMEMONE.id_empresa = dbo.CONTPLAN.id_empr )

                END
	            
            IF ( SELECT COUNT(ALMECPGA.id_eccptogast)
                 FROM   dbo.ALMECPGA
                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECPGA.id_emone = dbo.ALMEMONE.id_emone
                 WHERE  ALMECPGA.activo = 1
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.CONTPLAN
                                         WHERE  dbo.CONTPLAN.activa = 1
                                                AND dbo.CONTPLAN.id_cuenta = ALMECPGA.id_ctagasto
                                                AND ALMEMONE.id_empresa = dbo.CONTPLAN.id_empr )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                    VALUES  ( 'En el enlace de Concepto de Gasto la cuenta no esta en el plan de cuenta o esta inactiva:'                            
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                            SELECT  DISTINCT
                                    'Concepto de Gasto:'
                                    + LTRIM(RTRIM(ALMNCPGA.cod_cptogasto))
                                    + '/'
                                    + LTRIM(RTRIM(ALMNCPGA.desc_cptogasto))
                                    + ' Cuenta:'
                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                         'NO EXISTE'))) + '/'
                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                         'NO EXISTE')))
                            FROM    dbo.ALMECPGA
                                    INNER JOIN dbo.ALMEMONE ON dbo.ALMECPGA.id_emone = dbo.ALMEMONE.id_emone
                                    INNER JOIN dbo.ALMNCPGA ON dbo.ALMNCPGA.id_cptogasto = dbo.ALMECPGA.id_cptogasto
                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = ALMECPGA.id_ctagasto
                            WHERE   ALMECPGA.activo = 1
                                    AND NOT EXISTS ( SELECT *
                                                     FROM   dbo.CONTPLAN
                                                     WHERE  dbo.CONTPLAN.activa = 1
                                                            AND dbo.CONTPLAN.id_cuenta = ALMECPGA.id_ctagasto
                                                            AND ALMEMONE.id_empresa = dbo.CONTPLAN.id_empr )
                END
	            
	            
            IF ( SELECT COUNT(ALMECIMP.id_impuesto)
                 FROM   dbo.ALMECIMP
                        INNER JOIN dbo.ALMEMONE ON ALMECIMP.id_emone = dbo.ALMEMONE.id_emone
                 WHERE  ALMECIMP.activo = 1
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.CONTPLAN
                                         WHERE  dbo.CONTPLAN.activa = 1
                                                AND dbo.CONTPLAN.id_cuenta = ALMECIMP.id_cuentaimp
                                                AND ALMEMONE.id_empresa = dbo.CONTPLAN.id_empr )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'En el enlace de Impuesto la cuenta no esta en el plan de cuenta o esta inactiva:'	
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Impuesto:'
                                    + LTRIM(RTRIM(ALMNIMPU.cod_impuesto))
                                    + '/' + LTRIM(RTRIM(ALMNIMPU.desc_impuesto))
                                    + ' Cuenta:'
                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                         'NO EXISTE'))) + '/'
                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                         'NO EXISTE')))
                            FROM    dbo.ALMECIMP
                                    INNER JOIN dbo.ALMEMONE ON ALMECIMP.id_emone = dbo.ALMEMONE.id_emone
                                    INNER JOIN dbo.ALMNIMPU ON dbo.ALMNIMPU.id_impuesto = dbo.ALMECIMP.id_impuesto
                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = ALMECIMP.id_cuentaimp
                            WHERE   ALMECIMP.activo = 1
                                    AND NOT EXISTS ( SELECT *
                                                     FROM   dbo.CONTPLAN
                                                     WHERE  dbo.CONTPLAN.activa = 1
                                                            AND dbo.CONTPLAN.id_cuenta = ALMECIMP.id_cuentaimp
                                                            AND ALMEMONE.id_empresa = dbo.CONTPLAN.id_empr )
                END
	            
			--//15. Para el caso de los almacenes que tiene el parámetro contabiliz = 1 y tienen en la tabla ALMPGALM algún r
			--egistro con campo incluido_costo = 0, entonces en dependencia del id_gravam se ira a verificar si existen enlaces 
			--contables en las tablas ALMECARA o ALMECFLE o ALMECMAN o ALMECEMB y que estén activos
            DECLARE Codigo CURSOR
            FOR
                SELECT  DISTINCT
                        ALMTGRAV.cod_grav ,
                        almpgalm.id_almacen
                FROM    almpgalm
                        INNER JOIN dbo.ALMPALMA ON dbo.ALMPGALM.id_almacen = dbo.ALMPALMA.id_almacen
                        INNER JOIN dbo.ALMTGRAV ON ALMTGRAV.id_gravam = almpgalm.id_gravam
                WHERE   incluido_costo = 0
                        AND contabiliza = 1
	            
            OPEN Codigo   
            FETCH NEXT FROM Codigo INTO @cod_grav, @id_almacen
            WHILE @@FETCH_STATUS = 0
                BEGIN
                    IF ( @cod_grav = 'FLETE' )
                        BEGIN
							--Hay que buscar el enlace en ALMECFLE
							--16 Validar en CONTPLAN
                            IF ( SELECT COUNT(ALMECFLE.id_almacen)
                                 FROM   ALMECFLE
                                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECFLE.id_emone = dbo.ALMEMONE.id_emone
                                 WHERE  ALMECFLE.activo = 1
                                        AND ALMECFLE.id_almacen = @id_almacen
                                        AND NOT EXISTS ( SELECT
                                                              *
                                                         FROM dbo.CONTPLAN
                                                         WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECFLE.cta_flete )
                               ) <> 0
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error   
                                            )
                                    VALUES  ( 'Existen enlaces contables de gravamenes(FLETE) cuyas cuentas contables no existen o están inactivas.'                         
                                            )

                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error   
                                            )
                                            SELECT  DISTINCT
                                                    'Cuenta de Flete:'
                                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                              'NO EXISTE')))
                                                    + '/'
                                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                              'NO EXISTE')))
                                                    + ' Almacén:'
                                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen))
                                                    + '/'
                                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                            FROM    ALMECFLE
                                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMECFLE.id_almacen
                                                    INNER JOIN dbo.ALMEMONE ON dbo.ALMECFLE.id_emone = dbo.ALMEMONE.id_emone
                                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = ALMECFLE.cta_flete
                                            WHERE   ALMECFLE.activo = 1
                                                    AND ALMECFLE.id_almacen = @id_almacen
                                                    AND NOT EXISTS ( SELECT
                                                              *
                                                              FROM
                                                              dbo.CONTPLAN
                                                              WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECFLE.cta_flete )
                                END
                        END
	                    
                    IF ( @cod_grav = 'MAN' )
                        BEGIN
							--Hay que buscar el enla ce en ALMECMAN
							--16 Validar en CONTPLAN
                            IF ( SELECT COUNT(ALMECMAN.id_almacen)
                                 FROM   dbo.ALMECMAN
                                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECMAN.id_emone = dbo.ALMEMONE.id_emone
                                 WHERE  ALMECMAN.activo = 1
                                        AND ALMECMAN.id_almacen = @id_almacen
                                        AND NOT EXISTS ( SELECT
                                                              *
                                                         FROM dbo.CONTPLAN
                                                         WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECMAN.id_ctamanip )
                               ) <> 0
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error    
                                            )
                                    VALUES  ( 'Existen enlaces contables de gravamenes(Manipulación) cuyas cuentas contables no existen o están inactivas.'                         
                                            )

                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error      
                                            )
                                            SELECT  DISTINCT
                                                    'Cuenta de Manipulación:'
                                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                              'NO EXISTE')))
                                                    + '/'
                                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                              'NO EXISTE')))
                                                    + ' Almacén:'
                                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen))
                                                    + '/'
                                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                            FROM    dbo.ALMECMAN
                                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMECMAN.id_almacen
                                                    INNER JOIN dbo.ALMEMONE ON dbo.ALMECMAN.id_emone = dbo.ALMEMONE.id_emone
                                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = ALMECMAN.id_ctamanip
                                            WHERE   ALMECMAN.activo = 1
                                                    AND ALMECMAN.id_almacen = @id_almacen
                                                    AND NOT EXISTS ( SELECT
                                                              *
                                                              FROM
                                                              dbo.CONTPLAN
                                                              WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECMAN.id_ctamanip )

                                END
                        END
	                    
                    IF ( @cod_grav = 'ARA' )
                        BEGIN
							--Hay que buscar el enla ce en ALMECARA       
							--16 Validar en CONTPLAN
                            IF ( SELECT COUNT(ALMECARA.id_almacen)
                                 FROM   dbo.ALMECARA
                                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECARA.id_emone = dbo.ALMEMONE.id_emone
                                 WHERE  ALMECARA.activo = 1
                                        AND ALMECARA.id_almacen = @id_almacen
                                        AND NOT EXISTS ( SELECT
                                                              *
                                                         FROM dbo.CONTPLAN
                                                         WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECARA.id_ctaranc )
                               ) <> 0
                                BEGIN
                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error     
                                            )
                                    VALUES  ( 'Existen enlaces contables de gravamenes(ARANCEL) cuyas cuentas contables no existen o están inactivas.'                        
                                            )

                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error
                                            )
                                            SELECT DISTINCT
                                                    'Cuenta de Arancel:'
                                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                              'NO EXISTE')))
                                                    + '/'
                                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                              'NO EXISTE')))
                                                    + ' Almacén:'
                                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen))
                                                    + '/'
                                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                            FROM    dbo.ALMECARA
                                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMECARA.id_almacen
                                                    INNER JOIN dbo.ALMEMONE ON dbo.ALMECARA.id_emone = dbo.ALMEMONE.id_emone
                                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = ALMECARA.id_ctaranc
                                            WHERE   ALMECARA.activo = 1
                                                    AND ALMECARA.id_almacen = @id_almacen
                                                    AND NOT EXISTS ( SELECT
                                                              *
                                                              FROM
                                                              dbo.CONTPLAN
                                                              WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECARA.id_ctaranc )
                                END
                        END
	                    
                    IF ( @cod_grav = 'EMB' )
                        BEGIN
							--Hay que buscar el enla ce en ALMECEMB  
							--16 Validar en CONTPLAN
                            IF ( SELECT COUNT(ALMECEMB.id_almacen)
                                 FROM   dbo.ALMECEMB
                                        INNER JOIN dbo.ALMEMONE ON dbo.ALMECEMB.id_emone = dbo.ALMEMONE.id_emone
                                 WHERE  ALMECEMB.activo = 1
                                        AND ALMECEMB.id_almacen = @id_almacen
                                        AND NOT EXISTS ( SELECT
                                                              *
                                                         FROM dbo.CONTPLAN
                                                         WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECEMB.id_ctaemb )
                               ) <> 0
                                BEGIN

                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error  
                                            )
                                    VALUES  ( 'Existen enlaces contables de gravamenes(EMBALAJE) cuyas cuentas contables no existen o están inactivas.'                         
                                            )

                                    INSERT  INTO ##cierre_error
                                            ( mensaje_error  
                                            )
                                            SELECT DISTINCT
                                                    'Cuenta de Embalaje:'
                                                    + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                              'NO EXISTE')))
                                                    + '/'
                                                    + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                              'NO EXISTE')))
                                                    + ' Almacén:'
                                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen))
                                                    + '/'
                                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                            FROM    dbo.ALMECEMB
                                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMECEMB.id_almacen
                                                    INNER JOIN dbo.ALMEMONE ON dbo.ALMECEMB.id_emone = dbo.ALMEMONE.id_emone
                                                    LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = ALMECEMB.id_ctaemb
                                            WHERE   ALMECEMB.activo = 1
                                                    AND ALMECEMB.id_almacen = @id_almacen
                                                    AND NOT EXISTS ( SELECT
                                                              *
                                                              FROM
                                                              dbo.CONTPLAN
                                                              WHERE
                                                              CONTPLAN.activa = 1
                                                              AND CONTPLAN.id_empr = ALMEMONE.id_empresa
                                                              AND CONTPLAN.id_cuenta = ALMECEMB.id_ctaemb )
                                END
                        END  
                    FETCH NEXT FROM Codigo INTO @cod_grav, @id_almacen
                END
            CLOSE Codigo
            DEALLOCATE Codigo
	        
			--//18.	Validar que todos registros de ALMEAGPO que estén activos y cuyo grupo (ALMNGRUP.id_grupo) 
			--sea de tipo_grupo = Utiles, tengan en ALMECGPO donde ellos estén su grupo involucrado para el almacen del 
			--ALMEAGPO  que se esta analizando la Cuenta de Desgaste definida.
	        
           /* CREATE TABLE #TMP_enlace
                (
                  id_ctadesg INT ,
                  id_emone INT
                )
	            
            DECLARE Enlace_Contable_Desgaste CURSOR
            FOR
                SELECT  dbo.ALMEAGPO.id_grupo ,
                        ALMEAGPO.id_almacen ,
                        ALMEASEC.id_aeasec
                FROM    dbo.ALMEAGPO
                        INNER JOIN dbo.ALMNGRUP ON dbo.ALMEAGPO.id_grupo = dbo.ALMNGRUP.id_grupo
						INNER JOIN dbo.ALMNCATE ON dbo.ALMNGRUP.id_cat = dbo.ALMNCATE.id_cat
                        INNER JOIN dbo.ALMEASEC ON ALMEASEC.id_almacen = ALMEAGPO.id_almacen
                WHERE   ALMEAGPO.activo = 1
                        AND ALMNGRUP.activo = 1
                        AND ALMNGRUP.tip_grupo = '3'
                        AND ALMEASEC.activo = 1
                        AND ( ALMEASEC.tipo_seccion = '2'
                              OR ALMEASEC.tipo_seccion = '3'
                            )
	            
            OPEN Enlace_Contable_Desgaste    
            FETCH NEXT FROM Enlace_Contable_Desgaste INTO @id_grupo,
                @id_almacen, @id_aeasec
            WHILE @@FETCH_STATUS = 0
                BEGIN

                    DELETE  #TMP_enlace

                    INSERT  INTO #TMP_enlace
                            ( id_ctadesg ,
                              id_emone 
                            )
                            SELECT  ISNULL(gpo.id_ctadesg, 0) ,
                                    gpo.id_emone
                            FROM    ALMNGRUP ngrupo
                                    INNER JOIN ALMNFAMI nfami ON nfami.id_grupo = ngrupo.id_grupo
                                    INNER JOIN ALMNSFAM nsfam ON nsfam.id_fami = nfami.id_fami
                                    INNER JOIN ALMNCATE ncate ON ncate.id_cat = ngrupo.id_cat
                                    INNER JOIN ( SELECT ecgpo.id_ecgpo ,
                                                        ecgpo.id_emone ,
                                                        ecgpo.id_aeasec ,
                                                        ngrupoDesde.cod_grupo gdesde ,
                                                        ngrupoHasta.cod_grupo ghasta ,
                                                        nfamiDesde.cod_fami fdesde ,
                                                        nfamiHasta.cod_fami fhasta ,
                                                        nsfamDesde.cod_sfami sdesde ,
                                                        nsfamHasta.cod_sfami shasta ,
                                                        ecgpo.id_ctainv ,
                                                        ecgpo.id_ctacosto ,
                                                        ecgpo.id_ctagasto ,
                                                        ecgpo.id_ctadesg ,
                                                        ecgpo.id_ctaingreso ,
                                                        ncateDesde.cod_cat dcod_cat ,
                                                        ncateHasta.cod_cat hcod_cat
                                                 FROM   ALMECGPO ecgpo
                                                        INNER JOIN ALMEASEC easec ON ecgpo.id_aeasec = easec.id_aeasec
                                                        INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                                                        INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                                                        INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                                                        INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                                                        INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                                                        INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
                                                        INNER JOIN ALMNCATE AS ncateDesde ON ncateDesde.id_cat = ngrupoDesde.id_cat
                                                        INNER JOIN ALMNCATE AS ncateHasta ON ncateHasta.id_cat = ngrupoHasta.id_cat
                                                 WHERE  easec.id_aeasec = @id_aeasec
                                                        AND ecgpo.activo = 1
                                               ) gpo ON CONVERT(INT, ( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) >= CONVERT(INT, ( LTRIM(RTRIM(gpo.dcod_cat))
                                                              + LTRIM(RTRIM(gpo.gdesde))
                                                              + LTRIM(RTRIM(gpo.fdesde))
                                                              + LTRIM(RTRIM(gpo.sdesde)) ))
                                                        AND CONVERT(INT, ( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) <= CONVERT(INT, ( LTRIM(RTRIM(gpo.hcod_cat))
                                                              + LTRIM(RTRIM(gpo.ghasta))
                                                              + LTRIM(RTRIM(gpo.fhasta))
                                                              + LTRIM(RTRIM(gpo.shasta)) ))
                                                        AND LEN(( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) = LEN(( LTRIM(RTRIM(gpo.dcod_cat))
                                                              + LTRIM(RTRIM(gpo.gdesde))
                                                              + LTRIM(RTRIM(gpo.fdesde))
                                                              + LTRIM(RTRIM(gpo.sdesde)) ))
                                                        AND LEN(( LTRIM(RTRIM(ncate.cod_cat))
                                                              + LTRIM(RTRIM(ngrupo.cod_grupo))
                                                              + LTRIM(RTRIM(nfami.cod_fami))
                                                              + LTRIM(RTRIM(nsfam.cod_sfami)) )) = LEN(( LTRIM(RTRIM(gpo.hcod_cat))
                                                              + LTRIM(RTRIM(gpo.ghasta))
                                                              + LTRIM(RTRIM(gpo.fhasta))
                                                              + LTRIM(RTRIM(gpo.shasta)) ))
                            WHERE   ngrupo.id_grupo = @id_grupo

                    SELECT  @des_grupo = LTRIM(RTRIM(cod_cat)) 
							+ '/' + LTRIM(RTRIM(desc_cat))
							+ '/' +  LTRIM(RTRIM(cod_grupo)) + '/'
                            + LTRIM(RTRIM(desc_grupo))
                    FROM    dbo.ALMNGRUP
					INNER JOIN ALMNCATE ON dbo.ALMNGRUP.id_cat = dbo.ALMNCATE.id_cat
                    WHERE   dbo.ALMNGRUP.id_grupo = @id_grupo

                    SELECT  @des_almacen_seccion = 'Almacén:'
                            + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                            + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            + ' Sección:' + LTRIM(RTRIM(ALMNSECC.cod_seccion))
                            + '/' + LTRIM(RTRIM(ALMNSECC.desc_seccion))
                    FROM    dbo.ALMEASEC
                            INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                    WHERE   id_aeasec = @id_aeasec
					        
                    IF ( SELECT COUNT(*)
                         FROM   #TMP_enlace
                         WHERE  id_ctadesg = 0
                       ) <> 0
                        BEGIN
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error    
                                    )
                            VALUES  ( 'El grupo de útil:' + @des_grupo
                                      + ' no tiene definida la cuenta contable de desgaste para el '
                                      + @des_almacen_seccion       	
                                    )

                        END  
	                    
                    IF ( SELECT COUNT(*)
                         FROM   #TMP_enlace
                                INNER JOIN dbo.ALMEMONE ON #TMP_enlace.id_emone = dbo.ALMEMONE.id_emone
                         WHERE  NOT EXISTS ( SELECT *
                                             FROM   dbo.CONTPLAN
                                             WHERE  dbo.CONTPLAN.activa = 1
                                                    AND dbo.CONTPLAN.id_cuenta = #TMP_enlace.id_ctadesg
                                                    AND dbo.CONTPLAN.id_empr = dbo.ALMEMONE.id_empresa )
                       ) <> 0
                        BEGIN
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                            VALUES  ( 'Existen grupos de útiles cuyas cuentas contables estan inactivas o no existen en el plan de cuenta:'
                                    )
                            INSERT  INTO ##cierre_error
                                    ( mensaje_error 
                                    )
                                    SELECT  'Grupo:' + @des_grupo
                                            + ' Cuenta de Desgaste:'
                                            + LTRIM(RTRIM(ISNULL(cplan.cuenta,
                                                              'NO EXISTE')))
                                            + '/'
                                            + LTRIM(RTRIM(ISNULL(cplan.tit_cta,
                                                              'NO EXISTE')))
                                            + ' ' + @des_almacen_seccion
                                    FROM    #TMP_enlace
                                            INNER JOIN dbo.ALMEMONE ON #TMP_enlace.id_emone = dbo.ALMEMONE.id_emone
                                            LEFT JOIN CONTPLAN AS cplan ON cplan.id_cuenta = #TMP_enlace.id_ctadesg
                                    WHERE   NOT EXISTS ( SELECT
                                                              *
                                                         FROM dbo.CONTPLAN
                                                         WHERE
                                                              dbo.CONTPLAN.activa = 1
                                                              AND dbo.CONTPLAN.id_cuenta = #TMP_enlace.id_ctadesg
                                                              AND dbo.CONTPLAN.id_empr = dbo.ALMEMONE.id_empresa ) 


                        END
	                          
                    DELETE  FROM #TMP_enlace
	                
                    FETCH NEXT FROM Enlace_Contable_Desgaste INTO @id_grupo,
                        @id_almacen, @id_aeasec
                END 
            CLOSE Enlace_Contable_Desgaste
            DEALLOCATE Enlace_Contable_Desgaste
	        
            DROP TABLE #TMP_enlace*/
	        
			--// 20. Validar para aquellos registros de ALMEASEC q estén activos, cuyo campo 
			--// tipo_seccion = 4 (gasto), no exista en ALMSTOCC ningún registro donde el aeasec sea ese. 
            IF ( SELECT COUNT(ALMEASEC.id_aeasec)
                 FROM   dbo.ALMEASEC
                 WHERE  tipo_seccion = '4'
                        AND ALMEASEC.activo = 1
                        AND EXISTS ( SELECT ALMSTOCC.id_stocc
                                     FROM   dbo.ALMSTOCC
                                     WHERE  ALMSTOCC.id_aeasec = ALMEASEC.id_aeasec
                                            AND ALMSTOCC.activo = 1 )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos definidos en Secciones definidas de Gasto:'                           
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                            SELECT  DISTINCT
                                    'Secciones de Gastos con problemas:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMEASEC
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            WHERE   tipo_seccion = '4'
                                    AND ALMEASEC.activo = 1
                                    AND EXISTS ( SELECT ALMSTOCC.id_stocc
                                                 FROM   dbo.ALMSTOCC
                                                 WHERE  ALMSTOCC.id_aeasec = ALMEASEC.id_aeasec
                                                        AND ALMSTOCC.activo = 1 )
                END
	            
			--//21. Validar que los registros de  ALMNARTI, cuyo campo ctrol_exist = 0 y q este activo, no 
			--//existan en ningún ALMSTOCC cuyo aeasec se corresponda al de una sección diferente de almacenaje.
            IF ( SELECT COUNT(ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                 WHERE  dbo.ALMNARTI.activo = 1
                        AND ctrol_exist = 0
                        AND EXISTS ( SELECT *
                                     FROM   dbo.ALMSTOCC
                                            INNER JOIN dbo.ALMEASEC ON dbo.ALMSTOCC.id_aeasec = dbo.ALMEASEC.id_aeasec
                                     WHERE  dbo.ALMEASEC.activo = 1
                                            AND dbo.ALMSTOCC.activo = 1
                                            AND tipo_seccion <> '1'
                                            AND dbo.ALMSTOCC.id_arti = ALMNARTI.id_arti )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos que no Controlan Existencia y están definidos en Secciones diferentes de Almacenaje.'                                
                            )
                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                            SELECT  DISTINCT
                                    'Secciones diferentes de almacenaje con problemas:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMSTOCC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMSTOCC.id_aeasec = dbo.ALMEASEC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   dbo.ALMEASEC.activo = 1
                                    AND dbo.ALMSTOCC.activo = 1
                                    AND tipo_seccion <> '1'
                                    AND EXISTS ( SELECT *
                                                 FROM   dbo.ALMNARTI
                                                 WHERE  dbo.ALMNARTI.activo = 1
                                                        AND ctrol_exist = 0
                                                        AND dbo.ALMSTOCC.id_arti = ALMNARTI.id_arti )

                END
	            
			--//22.Validar que los registros de ALMSTOCC que estén inactivos, no tengan ALMSTOCL ni ALMSTOCD. 
            IF ( SELECT COUNT(dbo.ALMSTOCC.id_stocc)
                 FROM   dbo.ALMSTOCC
                        INNER JOIN dbo.ALMSTOCL ON dbo.ALMSTOCC.id_stocc = dbo.ALMSTOCL.id_stocc
                        INNER JOIN dbo.ALMSTOCD ON dbo.ALMSTOCL.id_stocl = dbo.ALMSTOCD.id_stocl
                 WHERE  ALMSTOCC.activo = 0
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error          
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos en secciones inactivos y tienen Existencia e Importe:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error          
                            )
                            SELECT  DISTINCT
                                    'Producto en sección inactivo con existencia e importe:'
                                    + +LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMSTOCC
                                    INNER JOIN dbo.ALMNARTI ON dbo.ALMNARTI.id_arti = dbo.ALMSTOCC.id_arti
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMSTOCC.id_aeasec
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMSTOCL ON dbo.ALMSTOCC.id_stocc = dbo.ALMSTOCL.id_stocc
                                    INNER JOIN dbo.ALMSTOCD ON dbo.ALMSTOCL.id_stocl = dbo.ALMSTOCD.id_stocl
                            WHERE   ALMSTOCC.activo = 0

                END
	            
			 --//El 23 es lo mismo que 24 a)
			--         24.	Validar que los registros de ALMNARTI q estén inactivos, no aparezcan en una de las sgtes tablas:
			--			a.	ALMSTOCC (con campo activo = 1)
			--			b.	ALMOFPRL (con campo ALMOFPRC.estado = 1 o 6)
			--			c.	ALMPEDSL (con campo ALMPEDSC.estado = 1 o 6)
			--			d.	ALMORPRL (con campo ALMORPRC.estado = 1 o 6)
			--			e.	ALMFICDC (con campo ALMFICDC.activo = 1)
			--			f.	ALMFICDL (con campo ALMFICDL.activo = 1)
			--			g.	ALMFICEC(con campo ALMFICEC.activo = 1)
			--			h.	ALMFICEL (con campo ALMFICEL.activo = 1)
			--			i.	ALMFICEA (con campo ALMFICEA.activo = 1)
			--			j.	ALMCOMPL (con campo ALMCOMPC.estado = 1 o 6 )
			--			k.	ALMMOVIL (con campo ALMMOVIC.estado =1 o 6)
			--			l.	ALMGASTL (con campo ALMGASTC.estado = 1 o 6)
			--			m.	ALMVENTL (con campo ALMVENTC.estado = 1 o 6)
			--			n.	ALMINVEL (con campo ALMINVEC.estado = 1 o 6)
			--			o.	ALMDESPP (con campo ALMDESPC.estado = 1 o 6)
			--			p.	ALMDESPL (con campo ALMDESPC.estado = 1 o 6)
			--			q.	ALMESCEC (con campo estado = 1 o 6)
			--			r.	ALMESCEL (con campo ALMESCEC.estado = 1 o 6)
			--			t.	ALMCAMBS (con campo ALMCAMBC.estado = 1 o 6)
			--			u.	ALMENTRP (con campo ALMENTRC.estado = 1 o 6)
			--			v.	ALMENTRA (con campo ALMENTRC.estado = 1 o 6)
			
			--//a.ALMSTOCC (con campo activo = 1)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN dbo.ALMSTOCC ON dbo.ALMNARTI.id_arti = dbo.ALMSTOCC.id_arti
                 WHERE  ALMNARTI.activo = 0
                        AND ALMSTOCC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están definidos en Almacén/Sección:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Producto inactivo y definidos en Almacén/Sección:'
                                    + +LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN dbo.ALMSTOCC ON dbo.ALMNARTI.id_arti = dbo.ALMSTOCC.id_arti
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMSTOCC.id_aeasec
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMSTOCC.activo = 1
                END
	            
			 --//b.ALMOFPRL (con campo ALMOFPRC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMOFPRL ON dbo.ALMNARTI.id_arti = dbo.ALMOFPRL.id_arti
                        INNER JOIN dbo.ALMOFPRC ON dbo.ALMOFPRL.id_ofproc = dbo.ALMOFPRC.id_ofproc
                 WHERE  ALMNARTI.activo = 0
                        AND ALMOFPRC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en Ofertas de Proveedores:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en la Oferta de Proveedor:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Proveedor:'
                                    + LTRIM(RTRIM(cod_prov)) + '/'
                                    + LTRIM(RTRIM(desc_prov))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMOFPRL ON dbo.ALMNARTI.id_arti = dbo.ALMOFPRL.id_arti
                                    INNER JOIN dbo.ALMOFPRC ON dbo.ALMOFPRL.id_ofproc = dbo.ALMOFPRC.id_ofproc
                                    INNER JOIN dbo.ALMNPROV ON dbo.ALMNPROV.id_prov = dbo.ALMOFPRC.id_prov
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMOFPRC.activo = 1
                END
	            
			--//c. ALMPEDSL (con campo ALMPEDSC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN almpedsl ON dbo.ALMNARTI.id_arti = dbo.ALMPEDSL.id_arti
                        INNER JOIN dbo.ALMPEDSC ON dbo.ALMPEDSL.id_pedsc = dbo.ALMPEDSC.id_pedsc
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMPEDSC.estado = 1
                              OR ALMPEDSC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error        
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Despiece:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error        
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Despiece:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN almpedsl ON dbo.ALMNARTI.id_arti = dbo.ALMPEDSL.id_arti
                                    INNER JOIN dbo.ALMPEDSC ON dbo.ALMPEDSL.id_pedsc = dbo.ALMPEDSC.id_pedsc
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMPEDSC.id_aeasecdest
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMPEDSC.estado = 1
                                          OR ALMPEDSC.estado = 6
                                        )
                END
	            
			--//d. ALMORPRL (con campo ALMORPRC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN dbo.ALMORPRL ON dbo.ALMNARTI.id_arti = dbo.ALMORPRL.id_arti
                        INNER JOIN dbo.ALMORPRC ON dbo.ALMORPRL.id_orcom = dbo.ALMORPRC.id_orcom
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMORPRC.estado = 1
                              OR ALMORPRC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de Órdenes de Compras:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Órdenes de Compras:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN dbo.ALMORPRL ON dbo.ALMNARTI.id_arti = dbo.ALMORPRL.id_arti
                                    INNER JOIN dbo.ALMORPRC ON dbo.ALMORPRL.id_orcom = dbo.ALMORPRC.id_orcom
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMORPRC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMORPRC.estado = 1
                                          OR ALMORPRC.estado = 6
                                        )
                END
	            
			--//e. ALMFICDC (con campo ALMFICDC.activo = 1)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMFICDC ON dbo.ALMNARTI.id_arti = dbo.ALMFICDC.id_arti
                 WHERE  ALMNARTI.activo = 0
                        AND ALMFICDC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en fichas activas de Despiece como producto a despiezarse:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo a despiezarse en Fichas de Despiece:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMFICDC ON dbo.ALMNARTI.id_arti = dbo.ALMFICDC.id_arti
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMFICDC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMFICDC.activo = 1
                END
	            
			--//f. ALMFICDL (con campo ALMFICDL.activo = 1)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMFICDL ON dbo.ALMNARTI.id_arti = dbo.ALMFICDL.id_arti
                 WHERE  ALMNARTI.activo = 0
                        AND ALMFICDL.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en fichas activas de Despiece como producto resultante:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Producto inactivo resultante en Fichas de Despiece:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMFICDL ON dbo.ALMNARTI.id_arti = dbo.ALMFICDL.id_arti
                                    INNER JOIN dbo.ALMFICDC ON dbo.ALMFICDC.id_arti = dbo.ALMNARTI.id_arti
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMFICDC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMFICDL.activo = 1

                END
	            
			--//g. ALMFICEC(con campo ALMFICEC.activo = 1)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMFICEC ON dbo.ALMNARTI.id_arti = dbo.ALMFICEC.id_arti
                 WHERE  ALMNARTI.activo = 0
                        AND ALMFICEC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en fichas activas de Escandallo como producto resultante:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                            SELECT DISTINCT
                                    'Producto inactivo resultante en Fichas de Escandallo:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMFICEC ON dbo.ALMNARTI.id_arti = dbo.ALMFICEC.id_arti
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMFICEC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMFICEC.activo = 1
                END
	            
			--//h. ALMFICEL (con campo ALMFICEL.activo = 1)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMFICEL ON dbo.ALMNARTI.id_arti = dbo.ALMFICEL.id_artiutil
                 WHERE  ALMNARTI.activo = 0
                        AND ALMFICEL.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error         
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en fichas activas de Escandallo como producto componente:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error         
                            )
                            SELECT DISTINCT
                                    'Producto inactivo componente en Fichas de Escandallo:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMFICEL ON dbo.ALMNARTI.id_arti = dbo.ALMFICEL.id_artiutil
                                    INNER JOIN ALMFICEC ON dbo.ALMFICEC.id_ficesc = dbo.ALMFICEL.id_ficesc
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMFICEC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMFICEL.activo = 1
                END
	            
			--//i.ALMFICEA (con campo ALMFICEA.activo = 1)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMFICEA ON dbo.ALMNARTI.id_arti = dbo.ALMFICEA.id_artialter
                 WHERE  ALMNARTI.activo = 0
                        AND ALMFICEA.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en fichas activas de Escandallo como productos alternativos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT DISTINCT
                                    'Producto inactivo alternativo en Fichas de Escandallo:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMFICEA ON dbo.ALMNARTI.id_arti = dbo.ALMFICEA.id_artialter
                                    INNER JOIN dbo.ALMFICEL ON dbo.ALMFICEL.id_linficesc = dbo.ALMFICEA.id_linficesc
                                    INNER JOIN dbo.ALMFICEC ON dbo.ALMFICEC.id_ficesc = dbo.ALMFICEL.id_ficesc
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMFICEC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ALMFICEA.activo = 1
                END
	            
			--//j.ALMCOMPL (con campo ALMCOMPC.estado = 1 o 6 )
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMCOMPL ON dbo.ALMNARTI.id_arti = dbo.ALMCOMPL.id_arti
                        INNER JOIN dbo.ALMCOMPC ON dbo.ALMCOMPL.id_compra = dbo.ALMCOMPC.id_compra
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMCOMPC.estado = 1
                              OR ALMCOMPC.estado = 6
                              OR ALMCOMPC.estado = 4
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse de Compras:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Compra:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMCOMPL ON dbo.ALMNARTI.id_arti = dbo.ALMCOMPL.id_arti
                                    INNER JOIN dbo.ALMCOMPC ON dbo.ALMCOMPL.id_compra = dbo.ALMCOMPC.id_compra
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMCOMPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMCOMPC.estado = 1
                                          OR ALMCOMPC.estado = 6
                                          OR ALMCOMPC.estado = 4
                                        )
                END
	            
			--//k.ALMMOVIL (con campo ALMMOVIC.estado =1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMMOVIL ON dbo.ALMNARTI.id_arti = dbo.ALMMOVIL.id_arti
                        INNER JOIN dbo.ALMMOVIC ON dbo.ALMMOVIL.id_transf = dbo.ALMMOVIC.id_transf
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMMOVIC.estado = 1
                              OR ALMMOVIC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse de Movimientos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Movimiento:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMMOVIL ON dbo.ALMNARTI.id_arti = dbo.ALMMOVIL.id_arti
                                    INNER JOIN dbo.ALMMOVIC ON dbo.ALMMOVIL.id_transf = dbo.ALMMOVIC.id_transf
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMMOVIC.id_aeasecorig
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMMOVIC.estado = 1
                                          OR ALMMOVIC.estado = 6
                                        )
                END
	            
			--//l.ALMGASTL (con campo ALMGASTC.estado = 1 o 6)  
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMGASTL ON dbo.ALMNARTI.id_arti = dbo.ALMGASTL.id_arti
                        INNER JOIN dbo.ALMGASTC ON dbo.ALMGASTL.id_gasto = dbo.ALMGASTC.id_gasto
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMGASTC.estado = 1
                              OR ALMGASTC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error     
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse de Gastos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Gasto:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMGASTL ON dbo.ALMNARTI.id_arti = dbo.ALMGASTL.id_arti
                                    INNER JOIN dbo.ALMGASTC ON dbo.ALMGASTL.id_gasto = dbo.ALMGASTC.id_gasto
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMGASTC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMGASTC.estado = 1
                                          OR ALMGASTC.estado = 6
                                        )
                END
	            
			--//m. ALMVENTL (con campo ALMVENTC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMVENTL ON dbo.ALMNARTI.id_arti = dbo.ALMVENTL.id_arti
                        INNER JOIN dbo.ALMVENTC ON dbo.ALMVENTL.id_venta = dbo.ALMVENTC.id_venta
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMVENTC.estado = 1
                              OR ALMVENTC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Ventas:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Venta:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMVENTL ON dbo.ALMNARTI.id_arti = dbo.ALMVENTL.id_arti
                                    INNER JOIN dbo.ALMVENTC ON dbo.ALMVENTL.id_venta = dbo.ALMVENTC.id_venta
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMVENTC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMVENTC.estado = 1
                                          OR ALMVENTC.estado = 6
                                        )
                END
	            
			--//n. ALMINVEL (con campo ALMINVEC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMINVEL ON dbo.ALMNARTI.id_arti = dbo.ALMINVEL.id_arti
                        INNER JOIN dbo.ALMINVEC ON dbo.ALMINVEL.id_inven = dbo.ALMINVEC.id_inven
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMINVEC.estado = 1
                              OR ALMINVEC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Inventario:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Inventario:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMINVEL ON dbo.ALMNARTI.id_arti = dbo.ALMINVEL.id_arti
                                    INNER JOIN dbo.ALMINVEC ON dbo.ALMINVEL.id_inven = dbo.ALMINVEC.id_inven
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMINVEC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMINVEC.estado = 1
                                          OR ALMINVEC.estado = 6
                                        )
                END
	            
			--//o. ALMDESPP (con campo ALMDESPC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMDESPP ON dbo.ALMNARTI.id_arti = dbo.ALMDESPP.id_arti
                        INNER JOIN dbo.ALMDESPL ON dbo.ALMDESPP.id_despiec = dbo.ALMDESPL.id_despiec
                        INNER JOIN dbo.ALMDESPC ON dbo.ALMDESPL.id_despiec = dbo.ALMDESPC.id_despiec
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMDESPC.estado = 1
                              OR ALMDESPC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Despiece como producto a despiezarse:'                               
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Despiece:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMDESPP ON dbo.ALMNARTI.id_arti = dbo.ALMDESPP.id_arti
                                    INNER JOIN dbo.ALMDESPL ON dbo.ALMDESPP.id_despiec = dbo.ALMDESPL.id_despiec
                                    INNER JOIN dbo.ALMDESPC ON dbo.ALMDESPL.id_despiec = dbo.ALMDESPC.id_despiec
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMDESPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMDESPC.estado = 1
                                          OR ALMDESPC.estado = 6
                                        )
                END
	            
			--//p. ALMDESPL (con campo ALMDESPC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMDESPL ON dbo.ALMNARTI.id_arti = dbo.ALMDESPL.id_arti
                        INNER JOIN dbo.ALMDESPC ON dbo.ALMDESPL.id_despiec = dbo.ALMDESPC.id_despiec
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMDESPC.estado = 1
                              OR ALMDESPC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Despiece como producto resultante:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Despiece:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMDESPL ON dbo.ALMNARTI.id_arti = dbo.ALMDESPL.id_arti
                                    INNER JOIN dbo.ALMDESPC ON dbo.ALMDESPL.id_despiec = dbo.ALMDESPC.id_despiec
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMDESPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMDESPC.estado = 1
                                          OR ALMDESPC.estado = 6
                                        )
                END
	            
			--q. ALMESCEC (con campo estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMESCEC ON dbo.ALMNARTI.id_arti = dbo.ALMESCEC.id_arti
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMESCEC.estado = 1
                              OR ALMESCEC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Escandallo como producto a elaborar:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Escandallo:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMESCEC ON dbo.ALMNARTI.id_arti = dbo.ALMESCEC.id_arti
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMESCEC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMESCEC.estado = 1
                                          OR ALMESCEC.estado = 6
                                        )
                END
	            
			--//r. ALMESCEL (con campo ALMESCEC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMESCEL ON dbo.ALMNARTI.id_arti = dbo.ALMESCEL.id_artiutil
                        INNER JOIN ALMESCEC ON dbo.ALMESCEL.id_escelab = dbo.ALMESCEC.id_escelab
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMESCEC.estado = 1
                              OR ALMESCEC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Escandallo como producto a utilizar:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Escandallo:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMESCEL ON dbo.ALMNARTI.id_arti = dbo.ALMESCEL.id_artiutil
                                    INNER JOIN ALMESCEC ON dbo.ALMESCEL.id_escelab = dbo.ALMESCEC.id_escelab
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMESCEC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMESCEC.estado = 1
                                          OR ALMESCEC.estado = 6
                                        )
                END
	               
			--//t. ALMCAMBS (con campo ALMCAMBC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMCAMBS ON dbo.ALMNARTI.id_arti = dbo.ALMCAMBS.id_artiorig
                        INNER JOIN dbo.ALMCAMBC ON dbo.ALMCAMBS.id_ccod = dbo.ALMCAMBC.id_ccod
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMCAMBC.estado = 1
                              OR ALMCAMBC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Cambio de Código:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Cambio de Código:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMCAMBS ON dbo.ALMNARTI.id_arti = dbo.ALMCAMBS.id_artiorig
                                    INNER JOIN dbo.ALMCAMBC ON dbo.ALMCAMBS.id_ccod = dbo.ALMCAMBC.id_ccod
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMCAMBC.id_almacen
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMCAMBC.estado = 1
                                          OR ALMCAMBC.estado = 6
                                        )
                END
	            
			--//u. ALMENTRP (con campo ALMENTRC.estado = 1 o 6)  
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMENTRP ON dbo.ALMNARTI.id_arti = dbo.ALMENTRP.id_arti
                        INNER JOIN dbo.ALMENTRC ON dbo.ALMENTRP.id_entreb = dbo.ALMENTRC.id_entreb
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMENTRC.estado = 1
                              OR ALMENTRC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error         
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Rebaja Automática:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Rebaja Automática:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMENTRP ON dbo.ALMNARTI.id_arti = dbo.ALMENTRP.id_arti
                                    INNER JOIN dbo.ALMENTRC ON dbo.ALMENTRP.id_entreb = dbo.ALMENTRC.id_entreb
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMENTRC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMENTRC.estado = 1
                                          OR ALMENTRC.estado = 6
                                        )
                END
	            
			--//v. ALMENTRA (con campo ALMENTRC.estado = 1 o 6)
            IF ( SELECT COUNT(dbo.ALMNARTI.id_arti)
                 FROM   dbo.ALMNARTI
                        INNER JOIN ALMENTRA ON dbo.ALMNARTI.id_arti = dbo.ALMENTRA.id_arti
                        INNER JOIN ALMENTRP ON dbo.ALMENTRA.id_linentreb = dbo.ALMENTRP.id_linentreb
                        INNER JOIN ALMENTRC ON dbo.ALMENTRP.id_entreb = dbo.ALMENTRC.id_entreb
                 WHERE  ALMNARTI.activo = 0
                        AND ( ALMENTRC.estado = 1
                              OR ALMENTRC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay productos como inactivos y están utilizados en operaciones pendientes de actualizarse en Rebaja Automática como producto alternativo:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                            SELECT  DISTINCT
                                    'Producto inactivo en Rebaja Automática:'
                                    + LTRIM(RTRIM(cod_arti)) + '/'
                                    + LTRIM(RTRIM(desc_larti))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNARTI
                                    INNER JOIN ALMENTRA ON dbo.ALMNARTI.id_arti = dbo.ALMENTRA.id_arti
                                    INNER JOIN ALMENTRP ON dbo.ALMENTRA.id_linentreb = dbo.ALMENTRP.id_linentreb
                                    INNER JOIN ALMENTRC ON dbo.ALMENTRP.id_entreb = dbo.ALMENTRC.id_entreb
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMENTRC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNARTI.activo = 0
                                    AND ( ALMENTRC.estado = 1
                                          OR ALMENTRC.estado = 6
                                        )
                END
	            
				--//25.	Validar que si existe algún proveedor en ALMNPROV como inactivo, no puede estar en alguna de las sgtes tablas:
				--a.	ALMEAPRV (con campo activo = 1)
				--b.	ALMOFPRC (con campo ALMOFPRC.activo=1)
				--c.	ALMORPRC (con campo ALMORPRC.estado = 1 o 6)
				--d.	ALMCOMPC (con campo ALMCOMPC.estado = 1 o 6 )
				--e.	ALMCOMCD (con campo ALMCOMPC.estado = 1 o 6 )
				--f.	ALMECPRV (con campo activo = 1)
				--Si se detecta en alguna tabla un id_prov involucrado con estas variantes, se emite mensaje de error 
				--“Imposible realizar Cierre Anual, hay incoherencia en los datos porque hay proveedores como inactivos 
				--y están utilizados en operaciones pendientes de actualizarse o anularse o en enlaces activos” y se sale de la opción.
				
			--a.ALMEAPRV (con campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNPROV
                        INNER JOIN dbo.ALMEAPRV ON dbo.ALMNPROV.id_prov = dbo.ALMEAPRV.id_prov
                 WHERE  ALMNPROV.activo = 0
                        AND ALMEAPRV.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay proveedores como inactivos y están utilizados en enlaces activos de almacén con proveedores:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Proveedor inactivo en enlace:'
                                    + LTRIM(RTRIM(dbo.ALMNPROV.cod_prov))
                                    + '/' + LTRIM(RTRIM(dbo.ALMNPROV.desc_prov))
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNPROV
                                    INNER JOIN dbo.ALMEAPRV ON dbo.ALMNPROV.id_prov = dbo.ALMEAPRV.id_prov
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEAPRV.id_almacen
                            WHERE   ALMNPROV.activo = 0
                                    AND ALMEAPRV.activo = 1
                END
	            
			--b. ALMOFPRC (con campo ALMOFPRC.activo=1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNPROV
                        INNER JOIN dbo.ALMOFPRC ON dbo.ALMNPROV.id_prov = dbo.ALMOFPRC.id_prov
                 WHERE  ALMNPROV.activo = 0
                        AND ALMOFPRC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay proveedores como inactivos y están utilizados en Ofertas de proveedores:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT  DISTINCT
                                    'Proveedor inactivo en Oferta de Proveedor:'
                                    + LTRIM(RTRIM(dbo.ALMNPROV.cod_prov))
                                    + '/' + LTRIM(RTRIM(dbo.ALMNPROV.desc_prov))
                            FROM    dbo.ALMNPROV
                                    INNER JOIN dbo.ALMOFPRC ON dbo.ALMNPROV.id_prov = dbo.ALMOFPRC.id_prov
                            WHERE   ALMNPROV.activo = 0
                                    AND ALMOFPRC.activo = 1
                END
	            
			--c. ALMORPRC (con campo ALMORPRC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNPROV
                        INNER JOIN dbo.ALMORPRC ON dbo.ALMNPROV.id_prov = dbo.ALMORPRC.id_prov
                 WHERE  ALMNPROV.activo = 0
                        AND ( ALMORPRC.estado = 1
                              OR ALMORPRC.estado = 6
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay proveedores como inactivos y están utilizados en operaciones pendientes de actualizarse en Órdenes de Compra:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    'Proveedor inactivo en Órdenes de Compra:'
                                    + LTRIM(RTRIM(dbo.ALMNPROV.cod_prov))
                                    + '/' + LTRIM(RTRIM(dbo.ALMNPROV.desc_prov))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNPROV
                                    INNER JOIN dbo.ALMORPRC ON dbo.ALMNPROV.id_prov = dbo.ALMORPRC.id_prov
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMORPRC.id_almacen
                            WHERE   ALMNPROV.activo = 0
                                    AND ( ALMORPRC.estado = 1
                                          OR ALMORPRC.estado = 6
                                        )
                END
	            
			--d. ALMCOMPC (con campo ALMCOMPC.estado = 1 o 6 )
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNPROV
                        INNER JOIN dbo.ALMCOMPC ON ALMCOMPC.id_eaprov = ALMNPROV.id_prov
                 WHERE  ALMNPROV.activo = 0
                        AND ( ALMCOMPC.estado = 1
                              OR ALMCOMPC.estado = 6
                              OR ALMCOMPC.estado = 4
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay proveedores como inactivos y están utilizados en operaciones pendientes de actualizarse de Compras:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    'Proveedor inactivo en Compra:'
                                    + LTRIM(RTRIM(dbo.ALMNPROV.cod_prov))
                                    + '/' + LTRIM(RTRIM(dbo.ALMNPROV.desc_prov))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNPROV
                                    INNER JOIN dbo.ALMCOMPC ON ALMCOMPC.id_eaprov = ALMNPROV.id_prov
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMCOMPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNPROV.activo = 0
                                    AND ( ALMCOMPC.estado = 1
                                          OR ALMCOMPC.estado = 6
                                          OR ALMCOMPC.estado = 4
                                        )
                END
	            
			--e. ALMCOMCD (con campo ALMCOMPC.estado = 1 o 6 )
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNPROV
                        INNER JOIN dbo.ALMCOMCD ON dbo.ALMNPROV.id_prov = dbo.ALMCOMCD.id_prov
                        INNER JOIN dbo.ALMCOMPC ON dbo.ALMCOMCD.id_compra = dbo.ALMCOMPC.id_compra
                 WHERE  ALMNPROV.activo = 0
                        AND ( ALMCOMPC.estado = 1
                              OR ALMCOMPC.estado = 6
                              OR ALMCOMPC.estado = 4
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay proveedores como inactivos y están utilizados en operaciones pendientes de actualizarse en Compras(impuestos):'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    'Proveedor inactivo en Compra(impuestos):'
                                    + LTRIM(RTRIM(dbo.ALMNPROV.cod_prov))
                                    + '/' + LTRIM(RTRIM(dbo.ALMNPROV.desc_prov))
                                    + ' Consecutivo:' + consecutiv
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMNPROV
                                    INNER JOIN dbo.ALMCOMCD ON dbo.ALMNPROV.id_prov = dbo.ALMCOMCD.id_prov
                                    INNER JOIN dbo.ALMCOMPC ON dbo.ALMCOMCD.id_compra = dbo.ALMCOMPC.id_compra
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMCOMPC.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                            WHERE   ALMNPROV.activo = 0
                                    AND ( ALMCOMPC.estado = 1
                                          OR ALMCOMPC.estado = 6
                                          OR ALMCOMPC.estado = 4
                                        )
                END
	            
			--f. ALMECPRV (con campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNPROV
                        INNER JOIN dbo.ALMECPRV ON dbo.ALMNPROV.id_prov = dbo.ALMECPRV.id_prov
                 WHERE  ALMNPROV.activo = 0
                        AND ALMECPRV.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay proveedores como inactivos y están utilizados en enlaces de proveedor con almacén y cuentas contables:'                                		
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Proveedor inactivo con almacén y cuentas contables:'
                                    + LTRIM(RTRIM(dbo.ALMNPROV.cod_prov))
                                    + '/' + LTRIM(RTRIM(dbo.ALMNPROV.desc_prov))
                            FROM    dbo.ALMNPROV
                                    INNER JOIN dbo.ALMECPRV ON dbo.ALMNPROV.id_prov = dbo.ALMECPRV.id_prov
                            WHERE   ALMNPROV.activo = 0
                                    AND ALMECPRV.activo = 1
                END
	            
				--26.	Validar si existe alguna seccion en ALMNSECC como inactiva, no puede estar en alguna de las sgtes tablas:
				--a.	ALMEASEC (campo activo = 1)
				--b.	ALMECGPO (campo activo = 1)
				--c.	ALMECFSB (campo activo = 1)
				--d.	ALMECIMP (campo activo = 1)
				--e.	ALMSTOCC (con campo activo = 1)
				--f.	ALMPEDSC (averiguar por id_aeasecorig e id_aeasecdest, con campo ALMPEDSC.estado = 1 o 6)
				--g.	ALMCOMPC (con campo ALMCOMPC.estado = 1 o 6 )
				--h.	ALMMOVIC (averiguar por id_aeasecorig e id_aeasecdest, con campo ALMMOVIC.estado =1 o 6)
				--i.	ALMGASTC (con campo ALMGASTC.estado = 1 o 6)
				--j.	ALMVENTC (con campo ALMVENTC.estado = 1 o 6)
				--k.	ALMINVEC (con campo ALMINVEC.estado = 1 o 6)
				--l.	ALMDESPC (con campo ALMDESPC.estado = 1 o 6)
				--m.	ALMESCEC (con campo estado = 1 o 6)
				--n.	ALMENTRC (con campo ALMENTRC.estado = 1 o 6)
				--Si se detecta en alguna tabla un id_seccion involucrado con estas variantes, se emite mensaje de error 
				--“Imposible realizar Cierre Anual, hay incoherencia en los datos porque hay secciones como inactivas y están 
				--utilizadas en operaciones pendientes de actualizarse o anularse o en enlaces activos” y se sale de la opción.

			--a.ALMEASEC (campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                 WHERE  ALMNSECC.activo = 0
                        AND ALMEASEC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error     
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en enlaces activos de almacén/sección:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error     
                            )
                            SELECT   DISTINCT
                                    ' Sección inactiva utilizada en enlaces activos de almacén/sección:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            WHERE   ALMNSECC.activo = 0
                                    AND ALMEASEC.activo = 1
                END
	        
			--b.ALMECGPO (campo activo = 1)  
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMECGPO ON dbo.ALMEASEC.id_aeasec = dbo.ALMECGPO.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ALMECGPO.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en enlaces contable activos de almacén/sección/grupo/familia/subfamilia:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    ' Sección inactiva utilizada en enlaces contable activos de almacén/sección/grupo/familia/subfamilia:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMECGPO ON dbo.ALMEASEC.id_aeasec = dbo.ALMECGPO.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ALMECGPO.activo = 1
                END
	            
			--c.ALMECFSB (campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMECFSB ON dbo.ALMEASEC.id_aeasec = dbo.ALMECFSB.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ALMECFSB.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en enlaces contables con cuentas de sobrantes y faltantes:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    ' Sección inactiva utilizada en enlaces contables con cuentas de sobrantes y faltantes:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMECFSB ON dbo.ALMEASEC.id_aeasec = dbo.ALMECFSB.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                            WHERE   ALMNSECC.activo = 0
                                    AND ALMECFSB.activo = 1
                END
	            
	--        --d.ALMECIMP (campo activo = 1)
	--        IF ( SELECT COUNT(*)
	--             FROM   dbo.ALMNSECC
	--                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
	--                    INNER JOIN dbo.ALMECFSB ON dbo.ALMEASEC.id_aeasec = dbo.ALMECFSB.id_aeasec
	--             WHERE  ALMNSECC.activo = 0
	--                    AND ALMECFSB.activo = 1
	--           ) <> 0 
	--            BEGIN
	--                RETURN 27
	--            END

			--e.ALMSTOCC (con campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMSTOCC ON dbo.ALMEASEC.id_aeasec = dbo.ALMSTOCC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ALMSTOCC.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en los Stocc:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    ' Sección inactiva utilizada en los Stocc:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMSTOCC ON dbo.ALMEASEC.id_aeasec = dbo.ALMSTOCC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ALMSTOCC.activo = 1
                END
	            
			--f.ALMPEDSC (averiguar por id_aeasecorig e id_aeasecdest, con campo ALMPEDSC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   ALMPEDSC
                        INNER JOIN dbo.ALMEASEC SEC1 ON dbo.ALMPEDSC.id_aeasecdest = SEC1.id_aeasec
                        INNER JOIN dbo.ALMNSECC NSEC1 ON SEC1.id_seccion = NSEC1.id_seccion
                        INNER JOIN dbo.ALMEASEC SEC2 ON dbo.ALMPEDSC.id_aeasecsol = SEC2.id_aeasec
                        INNER JOIN dbo.ALMNSECC NSEC2 ON SEC2.id_seccion = NSEC2.id_seccion
                 WHERE  ( NSEC1.activo = 0
                          AND ( ALMPEDSC.estado = '1'
                                OR ALMPEDSC.estado = '6'
                              )
                        )
                        OR ( (NSEC2.activo = 0
                             AND ( ALMPEDSC.estado = '1'
                                   OR ALMPEDSC.estado = '6'
                                 ))
                           )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones de pedidos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    'Consecutivo del pedido con secciones inactivas:'
                                    + consecutiv
                            FROM    ALMPEDSC
                                    INNER JOIN dbo.ALMEASEC SEC1 ON dbo.ALMPEDSC.id_aeasecdest = SEC1.id_aeasec
                                    INNER JOIN dbo.ALMNSECC NSEC1 ON SEC1.id_seccion = NSEC1.id_seccion
                                    INNER JOIN dbo.ALMEASEC SEC2 ON dbo.ALMPEDSC.id_aeasecsol = SEC2.id_aeasec
                                    INNER JOIN dbo.ALMNSECC NSEC2 ON SEC2.id_seccion = NSEC2.id_seccion
                            WHERE   ( NSEC1.activo = 0
                                      AND ( ALMPEDSC.estado = '1'
                                            OR ALMPEDSC.estado = '6'
                                          )
                                    )
                                    OR ( (NSEC2.activo = 0
                                         AND ( ALMPEDSC.estado = '1'
                                               OR ALMPEDSC.estado = '6'
                                             ))
                                       )
                END
	            
			--g.ALMCOMPC (con campo ALMCOMPC.estado = 1 o 6 )
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN ALMCOMPC ON dbo.ALMEASEC.id_aeasec = dbo.ALMCOMPC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMCOMPC.estado = '1'
                              OR ALMCOMPC.estado = '6'
                              OR ALMCOMPC.estado = '4'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse en Compras:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de compras:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN ALMCOMPC ON dbo.ALMEASEC.id_aeasec = dbo.ALMCOMPC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMCOMPC.estado = '1'
                                          OR ALMCOMPC.estado = '6'
                                          OR ALMCOMPC.estado = '4'
                                        )
                END
	            
			--h.ALMMOVIC (averiguar por id_aeasecorig e id_aeasecdest, con campo ALMMOVIC.estado =1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   ALMMOVIC
                        INNER JOIN dbo.ALMEASEC SEC1 ON dbo.ALMMOVIC.id_aeasecdest = SEC1.id_aeasec
                        INNER JOIN dbo.ALMNSECC NSEC1 ON SEC1.id_seccion = NSEC1.id_seccion
                        INNER JOIN dbo.ALMEASEC SEC2 ON dbo.ALMMOVIC.id_aeasecorig = SEC2.id_aeasec
                        INNER JOIN dbo.ALMNSECC NSEC2 ON SEC2.id_seccion = NSEC2.id_seccion
                 WHERE  ( NSEC1.activo = 0
                          AND ( ALMMOVIC.estado = '1'
                                OR ALMMOVIC.estado = '6'
                              )
                        )
                        OR ( (NSEC2.activo = 0
                             AND ( ALMMOVIC.estado = '1'
                                   OR ALMMOVIC.estado = '6'
                                 ))
                           )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Movimientos:'                               
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                            SELECT  DISTINCT
                                    'Consecutivo del movimiento con secciones inactivas:'
                                    + consecutiv
                            FROM    ALMMOVIC
                                    INNER JOIN dbo.ALMEASEC SEC1 ON dbo.ALMMOVIC.id_aeasecdest = SEC1.id_aeasec
                                    INNER JOIN dbo.ALMNSECC NSEC1 ON SEC1.id_seccion = NSEC1.id_seccion
                                    INNER JOIN dbo.ALMEASEC SEC2 ON dbo.ALMMOVIC.id_aeasecorig = SEC2.id_aeasec
                                    INNER JOIN dbo.ALMNSECC NSEC2 ON SEC2.id_seccion = NSEC2.id_seccion
                            WHERE   ( NSEC1.activo = 0
                                      AND ( ALMMOVIC.estado = '1'
                                            OR ALMMOVIC.estado = '6'
                                          )
                                    )
                                    OR ( (NSEC2.activo = 0
                                         AND ( ALMMOVIC.estado = '1'
                                               OR ALMMOVIC.estado = '6'
                                             ))
                                       )
                END
	            
			--i.ALMGASTC (con campo ALMGASTC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMGASTC ON dbo.ALMEASEC.id_aeasec = ALMGASTC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMGASTC.estado = '1'
                              OR ALMGASTC.estado = '6'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Gastos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de gastos:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMGASTC ON dbo.ALMEASEC.id_aeasec = ALMGASTC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMGASTC.estado = '1'
                                          OR ALMGASTC.estado = '6'
                                        )
                END
	            
			--j.ALMVENTC (con campo ALMVENTC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMVENTC ON dbo.ALMEASEC.id_aeasec = ALMVENTC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMVENTC.estado = '1'
                              OR ALMVENTC.estado = '6'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Ventas:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de ventas:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMVENTC ON dbo.ALMEASEC.id_aeasec = ALMVENTC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMVENTC.estado = '1'
                                          OR ALMVENTC.estado = '6'
                                        )
                END
	            
			--k.ALMINVEC (con campo ALMINVEC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMINVEC ON dbo.ALMEASEC.id_aeasec = ALMINVEC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMINVEC.estado = '1'
                              OR ALMINVEC.estado = '6'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error     
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Inventario:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de inventario:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMINVEC ON dbo.ALMEASEC.id_aeasec = ALMINVEC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMINVEC.estado = '1'
                                          OR ALMINVEC.estado = '6'
                                        )
                END
	            
			--l.ALMDESPC (con campo ALMDESPC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMDESPC ON dbo.ALMEASEC.id_aeasec = ALMDESPC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMDESPC.estado = '1'
                              OR ALMDESPC.estado = '6'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Despiece:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de despiece:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMDESPC ON dbo.ALMEASEC.id_aeasec = ALMDESPC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMDESPC.estado = '1'
                                          OR ALMDESPC.estado = '6'
                                        )
                END
	            
			--m.ALMESCEC (con campo estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMESCEC ON dbo.ALMEASEC.id_aeasec = ALMESCEC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMESCEC.estado = '1'
                              OR ALMESCEC.estado = '6'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Escandallos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de escandallos:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMESCEC ON dbo.ALMEASEC.id_aeasec = ALMESCEC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMESCEC.estado = '1'
                                          OR ALMESCEC.estado = '6'
                                        )
                END
	            
			--n. ALMENTRC (con campo ALMENTRC.estado = 1 o 6)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNSECC
                        INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                        INNER JOIN dbo.ALMENTRC ON dbo.ALMEASEC.id_aeasec = ALMENTRC.id_aeasec
                 WHERE  ALMNSECC.activo = 0
                        AND ( ALMENTRC.estado = '1'
                              OR ALMENTRC.estado = '6'
                            )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error    
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay secciones como inactivas y están utilizadas en operaciones pendientes de actualizarse de Rebaja Automática:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error       
                            )
                            SELECT  DISTINCT
                                    'Sección inactiva utilizada en operaciones de rebaja automática:'
                                    + LTRIM(RTRIM(cod_seccion)) + '/'
                                    + LTRIM(RTRIM(desc_seccion)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + 'Consecutivo:' + consecutiv
                            FROM    dbo.ALMNSECC
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMENTRC ON dbo.ALMEASEC.id_aeasec = ALMENTRC.id_aeasec
                            WHERE   ALMNSECC.activo = 0
                                    AND ( ALMENTRC.estado = '1'
                                          OR ALMENTRC.estado = '6'
                                        )
                END
	            
				--27.	Validar si existe algún grupo en ALMNGRUP como inactivo, no puede estar en alguna de las sgtes tables:
				--a.	ALMEAGPO (campo activo = 1)
				--b.	ALMNFAMI (campo activo = 1)
				--c.	ALMECGPO  (campo activo = 1)
				--d.	ALMECIMP (campo activo = 1)
				--e.	ALMECFSB (campo activo = 1)
				--Si se detecta en alguna tabla un id_grupo involucrado con estas variantes, se emite mensaje de error 
				--“Imposible realizar Cierre Anual, hay incoherencia en los datos porque hay grupos como inactivos y están utilizados 
				--en enlaces activos” y se sale de la opción.
				
			--a.ALMEAGPO (campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNGRUP
						INNER JOIN ALMNCATE ON dbo.ALMNGRUP.id_cat = dbo.ALMNCATE.id_cat
                        INNER JOIN ALMEAGPO ON dbo.ALMNGRUP.id_grupo = dbo.ALMEAGPO.id_grupo
						INNER JOIN ALMNALMA ON dbo.ALMEAGPO.id_almacen = dbo.ALMNALMA.id_almacen
                 WHERE  ALMNGRUP.activo = 0 AND ALMNCATE.reservado = 0
                        AND ALMEAGPO.activo = 1
               ) <> 0
                BEGIN 
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay grupos como inactivos y están utilizados en enlaces de almacén con grupos activos:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Categoria/Grupo inactivo utilizado en enlace almacén con grupos:'
                                    + LTRIM(RTRIM(cod_cat)) + '/'
									+ LTRIM(RTRIM(desc_cat)) + '/'
									+ LTRIM(RTRIM(cod_grupo)) + '/'
                                    + LTRIM(RTRIM(desc_grupo)) + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                            FROM    dbo.ALMNGRUP
									INNER JOIN ALMNCATE ON dbo.ALMNGRUP.id_cat = dbo.ALMNCATE.id_cat
                                    INNER JOIN ALMEAGPO ON dbo.ALMNGRUP.id_grupo = dbo.ALMEAGPO.id_grupo
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEAGPO.id_almacen
                            WHERE   ALMNGRUP.activo = 0 AND ALMNCATE.reservado = 0
                                    AND ALMEAGPO.activo = 1
                END
	            
			--b.ALMNFAMI (campo activo = 1)
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNGRUP
                        INNER JOIN ALMNCATE ON dbo.ALMNGRUP.id_cat = dbo.ALMNCATE.id_cat
						INNER JOIN ALMNFAMI ON dbo.ALMNGRUP.id_grupo = dbo.ALMNFAMI.id_grupo
                 WHERE  ALMNGRUP.activo = 0 AND ALMNCATE.reservado = 0
                        AND ALMNFAMI.activo = 1
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error 
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay grupos como inactivos y están utilizados en Familias de productos activas:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Categoria/Grupo inactivo utilizado en familias de productos activas:'
                                    + LTRIM(RTRIM(cod_cat)) + '/'
									+ LTRIM(RTRIM(desc_cat)) +'/'
									+ LTRIM(RTRIM(cod_grupo)) + '/'
                                    + LTRIM(RTRIM(desc_grupo)) + ' Familia:'
                                    + LTRIM(RTRIM(cod_fami)) + '/'
                                    + LTRIM(RTRIM(desc_fami))
                            FROM    dbo.ALMNGRUP
									INNER JOIN ALMNCATE ON dbo.ALMNGRUP.id_cat = dbo.ALMNCATE.id_cat
                                    INNER JOIN ALMNFAMI ON dbo.ALMNGRUP.id_grupo = dbo.ALMNFAMI.id_grupo
                            WHERE   ALMNGRUP.activo = 0 AND ALMNCATE.reservado = 0
                                    AND ALMNFAMI.activo = 1
                END
	            
		--c.ALMECGPO  (campo activo = 1)
            IF ( SELECT COUNT(ALMECGPO.id_ecgpo)
                 FROM   dbo.ALMECGPO
                        INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                        INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                        INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                        INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                        INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                        INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
						INNER JOIN ALMNCATE AS ncateDesde ON ngrupoDesde.id_cat = ncateDesde.id_cat
						INNER JOIN ALMNCATE AS ncateHasta ON ngrupoHasta.id_cat = ncateHasta.id_cat
                 WHERE  ( ngrupoDesde.activo = 0 AND ncateDesde.reservado = 0
                          AND ALMECGPO.activo = 1
                        )
                        OR ( ngrupoHasta.activo = 0 AND ncateHasta.reservado = 0
                             AND ALMECGPO.activo = 1
                           )
               ) <> 0
                BEGIN 
                    INSERT  INTO ##cierre_error
                            ( mensaje_error      
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay categorias/grupos como inactivos y están utilizados en enlace contable activos de almacén/sección/grupo/familia/subfamilia:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Categoria/Grupo inactivo utilizado en enlace contable activos de almacén/sección/grupo/familia/subfamilia:'
                                    + ' Desde:'
                                    + LTRIM(RTRIM(ncateDesde.cod_cat)) + '/'
									+ LTRIM(RTRIM(ncateDesde.desc_cat)) + '/'
									+ LTRIM(RTRIM(ngrupoDesde.cod_grupo))
                                    + '/' + LTRIM(RTRIM(ngrupoDesde.desc_grupo))
                                    + ' Hasta:'
                                    + LTRIM(RTRIM(ncateHasta.cod_cat)) + '/'
									+ LTRIM(RTRIM(ncateHasta.desc_cat)) + '/'
									+ LTRIM(RTRIM(ngrupoHasta.cod_grupo)) + '/'
									+ LTRIM(RTRIM(ngrupoHasta.desc_grupo))
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMECGPO
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMECGPO.id_aeasec
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                                    INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                                    INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                                    INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                                    INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                                    INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
									INNER JOIN ALMNCATE AS ncateDesde ON ngrupoDesde.id_cat = ncateDesde.id_cat
									INNER JOIN ALMNCATE AS ncateHasta ON ngrupoHasta.id_cat = ncateHasta.id_cat
                            WHERE   ( ngrupoDesde.activo = 0 AND ncateDesde.reservado = 0
                                      AND ALMECGPO.activo = 1
                                    )
                                    OR ( ngrupoHasta.activo = 0 AND ncateHasta.reservado = 0
                                         AND ALMECGPO.activo = 1
                                       )
                END
	            
			--d.ALMECIMP (campo activo = 1)
            IF ( SELECT COUNT(ALMECIMP.id_impuesto)
                 FROM   dbo.ALMECIMP
                        INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                        INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                        INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                        INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                        INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                        INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
						INNER JOIN ALMNCATE AS ncateDesde ON ngrupoDesde.id_cat = ncateDesde.id_cat
						INNER JOIN ALMNCATE AS ncateHasta ON ngrupoHasta.id_cat = ncateHasta.id_cat
                 WHERE  ( ngrupoDesde.activo = 0 AND ncateDesde.reservado = 0
                          AND ALMECIMP.activo = 1
                        )
                        OR ( ngrupoHasta.activo = 0 AND ncateHasta.reservado = 0
                             AND ALMECIMP.activo = 1
                           )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay grupos como inactivos y están utilizados en enlace contable del grupo/familia/subfamilia con cuenta de impuesto:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Categoria/Grupo inactivo utilizado en enlace contable del grupo/familia/subfamilia con cuenta de impuesto:'
                                    + ' Desde:'
                                    + LTRIM(RTRIM(ncateDesde.cod_cat)) + '/'
									+ LTRIM(RTRIM(ncateDesde.desc_cat)) + '/'
									+ LTRIM(RTRIM(ngrupoDesde.cod_grupo))
                                    + '/' + LTRIM(RTRIM(ngrupoDesde.desc_grupo))
                                    + ' Hasta:'
                                    + LTRIM(RTRIM(ncateHasta.cod_cat)) + '/'
									+ LTRIM(RTRIM(ncateHasta.desc_cat)) + '/'
									+ LTRIM(RTRIM(ngrupoHasta.cod_grupo))
                                    + '/' + LTRIM(RTRIM(ngrupoHasta.desc_grupo))
                            FROM    dbo.ALMECIMP
                                    INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                                    INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                                    INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                                    INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                                    INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                                    INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
									INNER JOIN ALMNCATE AS ncateDesde ON ngrupoDesde.id_cat = ncateDesde.id_cat
									INNER JOIN ALMNCATE AS ncateHasta ON ngrupoHasta.id_cat = ncateHasta.id_cat
                            WHERE   ( ngrupoDesde.activo = 0 AND ncateDesde.reservado = 0
                                      AND ALMECIMP.activo = 1
                                    )
                                    OR ( ngrupoHasta.activo = 0 AND ncateHasta.reservado = 0
                                         AND ALMECIMP.activo = 1
                                       )
                END
	            
			--e.ALMECFSB (campo activo = 1) 
            IF ( SELECT COUNT(ALMECFSB.id_ecfsb)
                 FROM   dbo.ALMECFSB
                        INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                        INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                        INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                        INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                        INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                        INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
						INNER JOIN ALMNCATE AS ncateDesde ON ngrupoDesde.id_cat = ncateDesde.id_cat
						INNER JOIN ALMNCATE AS ncateHasta ON ngrupoHasta.id_cat = ncateHasta.id_cat
                 WHERE  ( ngrupoDesde.activo = 0 AND ncateDesde.reservado = 0
                          AND ALMECFSB.activo = 1
                        )
                        OR ( ngrupoHasta.activo = 0 AND ncateHasta.reservado = 0
                             AND ALMECFSB.activo = 1
                           )
               ) <> 0
                BEGIN 
                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                    VALUES  ( 'Hay incoherencia en los datos porque hay categorias/grupos como inactivos y están utilizados en enlaces contable con cuentas de sobrantes y faltantes:'                                
                            )

                    INSERT  INTO ##cierre_error
                            ( mensaje_error   
                            )
                            SELECT DISTINCT
                                    'Categoria/Grupo inactivo utilizado en enlace contable con cuentas de sobrantes y faltantes:'
                                    + ' Desde:'
                                    + LTRIM(RTRIM(ncateDesde.cod_cat)) 
									+ LTRIM(RTRIM(ncateDesde.desc_cat)) 
									+ '/' + LTRIM(RTRIM(ngrupoDesde.cod_grupo))
                                    + '/' + LTRIM(RTRIM(ngrupoDesde.desc_grupo))
                                    + ' Hasta:'
                                    + LTRIM(RTRIM(ncateHasta.cod_cat)) 
									+ LTRIM(RTRIM(ncateHasta.desc_cat)) 
									+ '/' + + LTRIM(RTRIM(ngrupoHasta.cod_grupo))
                                    + '/' + LTRIM(RTRIM(ngrupoHasta.desc_grupo))
                                    + ' Almacén:'
                                    + LTRIM(RTRIM(ALMNALMA.cod_almacen)) + '/'
                                    + LTRIM(RTRIM(ALMNALMA.desc_almacen))
                                    + ' Sección:' + LTRIM(RTRIM(cod_seccion))
                                    + '/' + LTRIM(RTRIM(desc_seccion))
                            FROM    dbo.ALMECFSB
                                    INNER JOIN dbo.ALMEASEC ON dbo.ALMEASEC.id_aeasec = dbo.ALMECFSB.id_aeasec
                                    INNER JOIN dbo.ALMNALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMEASEC.id_almacen
                                    INNER JOIN dbo.ALMNSECC ON dbo.ALMNSECC.id_seccion = dbo.ALMEASEC.id_seccion
                                    INNER JOIN ALMNSFAM AS nsfamDesde ON id_dsfami = nsfamDesde.id_sfami
                                    INNER JOIN ALMNSFAM AS nsfamHasta ON id_hsfami = nsfamHasta.id_sfami
                                    INNER JOIN ALMNFAMI AS nfamiDesde ON nsfamDesde.id_fami = nfamiDesde.id_fami
                                    INNER JOIN ALMNFAMI AS nfamiHasta ON nsfamHasta.id_fami = nfamiHasta.id_fami
                                    INNER JOIN ALMNGRUP AS ngrupoDesde ON nfamiDesde.id_grupo = ngrupoDesde.id_grupo
                                    INNER JOIN ALMNGRUP AS ngrupoHasta ON nfamiHasta.id_grupo = ngrupoHasta.id_grupo
									INNER JOIN ALMNCATE AS ncateDesde ON ngrupoDesde.id_cat = ncateDesde.id_cat
									INNER JOIN ALMNCATE AS ncateHasta ON ngrupoHasta.id_cat = ncateHasta.id_cat
							WHERE   ( ngrupoDesde.activo = 0 AND ncateDesde.reservado = 0
                                      AND ALMECFSB.activo = 1
                                    )
                                    OR ( ngrupoHasta.activo = 0 AND ncateHasta.reservado = 0
                                         AND ALMECFSB.activo = 1
                                       )
                END
	            
			--28. Validar para aquellos almacenes que tienen parámetro contabiliz=0 que tengan la fecha 
			--de ultimo movimiento (fecha_umov) dentro del rango de fecha desde y hasta que tienen definido, 
			--esto lo sabes en la tabla ALMPALMA.fecha_desde y ALMPALMA.fecha_hasta. Si se encontrara que la 
			--fecha-umov es superior al rango definido se emite mensaje de error, “Imposible realizar Cierre 
			--Anual, hay almacenes con fecha de ultima operación mayor a los rangos de fecha definidos” y se sale de la opcion
            IF ( SELECT COUNT(*)
                 FROM   dbo.ALMNALMA alm
                        INNER JOIN dbo.ALMPALMA almp ON alm.id_almacen = almp.id_almacen
                 WHERE  alm.activo = 1
                        AND almp.activo = 1
                        AND contabiliza = 0
                        AND NOT EXISTS ( SELECT *
                                         FROM   dbo.ALMNALMA
                                                INNER JOIN dbo.ALMPALMA ON dbo.ALMNALMA.id_almacen = dbo.ALMPALMA.id_almacen
                                         WHERE  ALMNALMA.activo = 1
                                                AND ALMPALMA.activo = 1
                                                AND contabiliza = 0
                                                AND ALMNALMA.fecha_umov >= ALMPALMA.fecha_desde
                                                AND ALMNALMA.fecha_umov <= ALMPALMA.fecha_hasta
                                                AND alm.id_almacen = ALMNALMA.id_almacen )
               ) <> 0
                BEGIN
                    INSERT  INTO ##cierre_error
                            ( mensaje_error  
                            )
                    VALUES  ( 'Hay almacenes con fecha de ultima operación mayor a los rangos de fecha definidos.'                                
                            )
                END 
	            
            RETURN 0
        END
`,
};
export const claveAlmacen = {
  id: 5,
  name: "Cambio de clave de almacén ",
  description:
    "Con este Script de cambia a 1 la clave de operaciones especiales de todos los almacenes",
  code: `/*** Correr sobre la base de ZUNst. Ahora la clave es 1, para todos los almacenes ***/
use ZUNst
update [ALMNALMA] set clave_umov = '356A192B7913B04C54574D18C28D46E6395428AB' , clave_operexc = '356A192B7913B04C54574D18C28D46E6395428AB' , fecha_ccumov = CURRENT_TIMESTAMP, fecha_ccopx = CURRENT_TIMESTAMP
`,
};
