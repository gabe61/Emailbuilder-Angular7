import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('component init');
    }

    @Input() src: string;

    DevHtmlTemplate =
        [
            {'titleTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: {{element.options.backgroundColor}}" data-type="title">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" class="title" style="padding:{{ element.options.padding | arrToPadding  }}; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: {{element.options.color}}; line-height: 42px; font-size: 36px;" data-block-id="main-title">{{ element.options.title }}</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: {{element.options.color}}; line-height: 22px; font-size: 16px;" data-block-id="sub-title">{{ element.options.subTitle }}</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'buttonTemplate': '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding: {{ element.options.padding | arrToPadding  }};" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="{{ element.options.align }}" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n                        <a style="background-color: {{element.options.buttonBackgroundColor}};color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="{{ element.options.url }}" data-default="1">{{ element.options.buttonText }}</a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'textTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  {{element.options.backgroundColor}}" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }}; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'unsubscribeTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }};text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'dividerTemplate': '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color: {{element.options.backgroundColor}};" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'imageTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="image">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" style="padding: {{ element.options.padding | arrToPadding  }};" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="{{element.options.width}}" alt="" src="{{ element.options.image }}" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'imageTextInsideTemplate': '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <ng-bind-html ng-bind-html="element.options.text | rawHtml"></ng-bind-html>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            //{'imageTextRightTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextRight">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td class="gap" width="30"></td>\n                    <td width="160">\n                        <img border="0" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 340px;padding:5px 5px 0 0;">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <table width="190">\n                <tbody>\n                <tr>\n                    <td class="text-block" data-ng-bind-html="element.options.text | rawHtml">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'imageTextRightTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" class="container_wrap" style="display:inline;"> <table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>'},
            {'imageTextLeftTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap" style="display:inline;"> <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>'},
            {'imageText2x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>'},
            // {'imageText3x2Template', '<table width="640" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageText3x2">\n    <tbody>\n    <tr>\n        <td class="image-caption" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table class="image-caption-container" align="left" border="0" cellpadding="0" cellspacing="0"\n                   width="350">\n                <tbody>\n                <tr>\n                    <td>\n                        <table class="image-caption-column" align="left" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image1 }}"\n                                         width="{{ element.options.width1 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text1 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <table class="image-caption-column" align="right" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td class="image-caption-top-gap" height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image2 }}"\n                                         width="{{ element.options.width2 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text2 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <table class="image-caption-column" align="right" border="0" cellpadding="0" cellspacing="0"\n                   width="160">\n                <tbody>\n                <tr>\n                    <td class="image-caption-top-gap" height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content image"\n                        style="font-family: Arial; font-size: 13px; color: #000000;">\n                        <img src="{{ element.options.image3 }}"\n                             width="{{ element.options.width3 }}"\n                             alt="" style="display: block;" align="2" border="0">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content text"\n                        style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                        align="left"\n                        data-ng-bind-html="element.options.text3 | rawHtml">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="5" width="100%"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            {'imageText3x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="{{element.options.image3}}" border="0" alt="img" width="{{element.options.width3}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text3 | rawHtml" align="center"> </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>'},
        ];
}