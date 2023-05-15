import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { SliderModule } from 'primeng/slider';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton'; 
import { TabViewModule } from 'primeng/tabview';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [
			ProgressSpinnerModule,
			MegaMenuModule,
			RadioButtonModule,
			ChipModule,
			CheckboxModule,
			DialogModule,
			ButtonModule,
			ConfirmDialogModule,
			ToastModule,
			CardModule,
			TableModule,
			InputNumberModule,
			InputMaskModule,
			InputSwitchModule,
			InputTextModule,
			InputTextareaModule,
			FileUploadModule,
			MultiSelectModule,
			DropdownModule,
			TagModule,
			DividerModule,
			MessageModule,
			ColorPickerModule,
			MessagesModule,
			TooltipModule,
			OverlayPanelModule,
			SplitButtonModule,
			MenuModule,
			TreeModule,        
			FieldsetModule,
			CalendarModule,				
			TreeSelectModule,
			MenubarModule,
			SliderModule,
			TabViewModule
	],
	exports: [
		ProgressSpinnerModule,
		MegaMenuModule,
		RadioButtonModule,   
		ChipModule,
		CheckboxModule,
		DialogModule,
		CardModule,
		ButtonModule,
		ConfirmDialogModule,
		ToastModule,
		TableModule,
		InputNumberModule,
		InputMaskModule,
		InputSwitchModule,
		InputTextModule,
		InputTextareaModule,
		FileUploadModule,
		MultiSelectModule,
		DropdownModule,
		TagModule,
		DividerModule,
		MessageModule,
		ColorPickerModule,
		MessagesModule,
		TooltipModule,
		OverlayPanelModule,
		SplitButtonModule,
		MenuModule,
		TreeModule,        
		FieldsetModule,
		CalendarModule,				
		TreeSelectModule,
		MenubarModule,
		SliderModule,
		TabViewModule
	]
})
	export class SharedModule {
	}