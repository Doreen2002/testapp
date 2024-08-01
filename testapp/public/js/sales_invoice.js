frappe.ui.form.on('Sales Invoice', {
	refresh(frm) {
		frm.set_df_property('customer', 'hidden', 1)
	}
})