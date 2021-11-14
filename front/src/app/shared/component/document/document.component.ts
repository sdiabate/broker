import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Document } from 'src/app/model/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() documents: Document[];

  iconList = [
    { type: "xlsx", icon: "file-excel" },
    { type: "pdf", icon: "file-pdf" },
    { type: "jpg", icon: "file-image" }
  ];

  displayedColumns: string[] = ['date', 'type', 'title', 'download', 'delete'];

  dataSource = new MatTableDataSource<Document>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.documents;
  }

  getIcon(doc: Document): IconName {
    let ext = doc.title.split(".").pop();
    let obj = this.iconList.filter(row => {
      if (row.type === ext) {
        return true;
      }
    });
    if (obj.length > 0) {
      let icon = obj[0].icon;
      return icon as IconName;
    } else {
      return 'file' as IconName;
    }
  }
}
