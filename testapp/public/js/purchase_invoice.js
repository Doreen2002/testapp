frappe.ui.form.on('Purchase Invoice', {
	refresh(frm) {
		frm.set_df_property('customer', 'reqd', 1)
	}
})