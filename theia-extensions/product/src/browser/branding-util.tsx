/********************************************************************************
 * Copyright (C) 2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { WindowService } from '@theia/core/lib/browser/window/window-service';
import * as React from 'react';

export interface ExternalBrowserLinkProps {
    text: string;
    url: string;
    windowService: WindowService;
}

function BrowserLink(props: ExternalBrowserLinkProps): JSX.Element {
    return <a
        role={'button'}
        tabIndex={0}
        href={props.url}
        target='_blank'
        >
        {props.text}
    </a>;
}

export function renderWhatIs(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            What is Codalect?
        </h3>
        <div>
            Codalect is an AI coding environment that builds your judgment — not your output.
            Rather than completing code for you, the AI assistant responds with hints, questions,
            and pseudocode, guiding you to the answer rather than handing it to you.
        </div>
        <div>
            Unlike completion-first tools, Codalect operates under a deliberate constraint: the
            AI resists finishing work you could reason through yourself. The result is durable skill
            that compounds — reading code, evaluating suggestions, directing agents well.
        </div>
    </div>;
}

export function renderGettingStarted(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Getting Started
        </h3>
        <div>
            Open a folder from the Explorer panel to begin. The AI assistant is always available
            on the right — ask it about code you're reading, get unstuck on a problem,
            or request a hint without asking for the full solution.
        </div>
        <div>
            The assistant runs on Claude and will guide rather than complete. If you push it for a
            direct answer, it will redirect you. That redirection is the product working as intended.
        </div>
    </div>;
}

export function renderSupport(windowService: WindowService): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Questions &amp; Feedback
        </h3>
        <div>
            Visit <BrowserLink text="codalect.com" url="https://www.codalect.com/"
            windowService={windowService} /> for documentation and updates.
            To report a bug or suggest a feature, <BrowserLink text="open an issue on GitHub"
            url="https://github.com/Praevisio-Labs/codalect-for-desktop/issues/new"
            windowService={windowService} />.
        </div>
    </div>;
}

export function renderDownloads(): React.ReactNode {
    return <div className='gs-section'>
        <h3 className='gs-section-header'>
            Updates
        </h3>
        <div>
            Codalect checks for updates automatically on each launch. You can also check manually via{' '}
            <span className='gs-text-bold'>File &gt; Preferences &gt; Check for Updates…</span>
        </div>
    </div>;
}
