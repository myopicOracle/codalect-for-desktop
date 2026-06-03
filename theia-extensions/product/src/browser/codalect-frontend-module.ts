/********************************************************************************
 * Copyright (C) 2020 TypeFox, EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import '../../src/browser/style/index.css';

import { WidgetFactory } from '@theia/core/lib/browser';
import { AboutDialog } from '@theia/core/lib/browser/about-dialog';
import { CommandContribution } from '@theia/core/lib/common/command';
import { ContainerModule } from '@theia/core/shared/inversify';
import { GettingStartedWidget } from '@theia/getting-started/lib/browser/getting-started-widget';
import { MenuContribution } from '@theia/core/lib/common/menu';
import { CodalectAboutDialog } from './codalect-about-dialog';
import { CodalectContribution } from './codalect-contribution';
import { CodalectGettingStartedWidget } from './codalect-getting-started-widget';

export default new ContainerModule((bind, _unbind, isBound, rebind) => {
    bind(CodalectGettingStartedWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: GettingStartedWidget.ID,
        createWidget: () => context.container.get<CodalectGettingStartedWidget>(CodalectGettingStartedWidget),
    })).inSingletonScope();
    if (isBound(AboutDialog)) {
        rebind(AboutDialog).to(CodalectAboutDialog).inSingletonScope();
    } else {
        bind(AboutDialog).to(CodalectAboutDialog).inSingletonScope();
    }

    bind(CodalectContribution).toSelf().inSingletonScope();
    [CommandContribution, MenuContribution].forEach(serviceIdentifier =>
        bind(serviceIdentifier).toService(CodalectContribution)
    );
});
