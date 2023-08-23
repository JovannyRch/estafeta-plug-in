export const ESTAFETA_LINKS = {
	nuevoEnvio: () =>
		`https://estafetap10-tst.outsystemsenterprise.com/EstafetaPlugIn_UI/NewOrCreateShipment`,
	crearEnvio: (order: string) =>
		`https://estafetap10-tst.outsystemsenterprise.com/EstafetaPlugIn_UI/NewOrCreateShipment?NoOrder=${order}`,
	numeroDeGuia: (wayBill: string) =>
		`https://estafetap10-tst.outsystemsenterprise.com/Tracking/searchByGet/?wayBillType=1&wayBill=${wayBill}`,
	nuevaRecoleccion: () => `https://estafetap10-tst.outsystemsenterprise.com/EstafetaPlugIn_UI/NewPickUp`,

	reprogramar: (code: string) =>
		`https://estafetap10-tst.outsystemsenterprise.com/EstafetaPlugIn_UI/NewPickUp?NoPickup=${code}`,
	backofficeEstafeta: `https://estafetap10-tst.outsystemsenterprise.com/`
}
