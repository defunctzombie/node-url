'use strict';

export function parse(url: string, parseQueryString: string, slashesDenoteHost: string): Url;
export function resolve(source: string, relative: string): string;
export function resolveObject(source: string, relative: string): Url;
export function format(obj: string | url): string;

export class Url{
    protocol: string;
    slashes: string;
    auth: string;
    host: string;
    port: string;
    hostname: string;
    hash: string;
    search: string;
    query: string;
    pathname: string;
    path: string;
    href: string;

    parse(): Url;
    format(): string;
    resolve(): string;
    resolveObject(): Url;
    parseHost(): void;
}
