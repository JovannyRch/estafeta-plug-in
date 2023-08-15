export const ESTAFETA_LINKS = {
	nuevoEnvio: () => `https://pdv.estafeta.com/EstafetaPlugIn_UI/NewOrCreateShipment`,
	crearEnvio: (order: string) =>
		`https://pdv.estafeta.com/EstafetaPlugIn_UI/NewOrCreateShipment?NoOrder=${order}`,
	numeroDeGuia: (wayBill: string) =>
		`http://www.estafeta.com/Tracking/searchByGet/?wayBillType=1&wayBill=${wayBill}`,
	nuevaRecoleccion: () => `https://pdv.estafeta.com/EstafetaPlugIn_UI/NewPickUp`,

	reprogramar: (code: string) => `https://pdv.estafeta.com/EstafetaPlugIn_UI/NewPickUp?NoPickup=${code}`,
	backofficeEstafeta: `https://pdv.estafeta.com/EstafetaPlugIn_UI/`
}
