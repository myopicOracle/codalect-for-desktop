/********************************************************************************
 * Copyright (C) 2021 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { inject, injectable } from '@theia/core/shared/inversify';
import { CommonMenus } from '@theia/core/lib/browser/common-frontend-contribution';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common/command';
import { MenuContribution, MenuModelRegistry, MenuPath } from '@theia/core/lib/common/menu';
import { WindowService } from '@theia/core/lib/browser/window/window-service';

export namespace CodalectMenus {
    export const CODALECT_HELP: MenuPath = [...CommonMenus.HELP, 'codalect'];
}
export namespace CodalectCommands {
    export const CATEGORY = 'Codalect';
    export const REPORT_ISSUE: Command = {
        id: 'codalect:report-issue',
        category: CATEGORY,
        label: 'Report Issue'
    };
    export const DOCUMENTATION: Command = {
        id: 'codalect:documentation',
        category: CATEGORY,
        label: 'Documentation'
    };
}

@injectable()
export class CodalectContribution implements CommandContribution, MenuContribution {

    @inject(WindowService)
    protected readonly windowService: WindowService;

    static REPORT_ISSUE_URL = 'https://github.com/Praevisio-Labs/codalect-for-desktop/issues/new?assignees=&labels=bug&template=bug_report.md';
    static DOCUMENTATION_URL = 'https://www.codalect.com/docs';

    registerCommands(commandRegistry: CommandRegistry): void {
        commandRegistry.registerCommand(CodalectCommands.REPORT_ISSUE, {
            execute: () => this.windowService.openNewWindow(CodalectContribution.REPORT_ISSUE_URL, { external: true })
        });
        commandRegistry.registerCommand(CodalectCommands.DOCUMENTATION, {
            execute: () => this.windowService.openNewWindow(CodalectContribution.DOCUMENTATION_URL, { external: true })
        });
    }

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CodalectMenus.CODALECT_HELP, {
            commandId: CodalectCommands.REPORT_ISSUE.id,
            label: CodalectCommands.REPORT_ISSUE.label,
            order: '1'
        });
        menus.registerMenuAction(CodalectMenus.CODALECT_HELP, {
            commandId: CodalectCommands.DOCUMENTATION.id,
            label: CodalectCommands.DOCUMENTATION.label,
            order: '2'
        });
    }
}
