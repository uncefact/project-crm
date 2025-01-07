---
sidebar_position: 7
title: Traceability Events
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Digital Traceability Events

The CRMTP digital traceability events are all implemented as profiles of the [UNTP Digital Traceability Event (DTE)](https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvents). An CRMTP DTE profile is no different in structure to a UNTP DTE but has specific constraints regarding the identifier schemes and industry vocabularies. Implementers should familiarise with the UNTP DTE before implementing any of the CRMTP traceability event profiles.

The table lists each CRMTP traceability event type and version as well as it's UNTP version dependency.

| Name | Current Version |Status| Release Date | UNTP dependency |
| --- | ---- | ------ | --- | --- | 
| Bulk mixing event|  | Draft| 20-11-2024 |UNTP DTE v0.5.0|
| Smelting event|  | Draft| 20-11-2024 |UNTP DTE v0.5.0|
| Refining event | | Draft| 20-11-2024 |UNTP DTE v0.5.0|

### Logical Model

All CRMTP traceability events use the [UNTP Digital Traceability Event](https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvent) v 0.5.0 logical model without change. AATP only applies specific vocabulary and rules.

### Technical Artefacts

Implementers must use the [UNTP DTE Technical Artefacts](https://test.uncefact.org/vocabulary/untp/dte/0/about).  v0.5.0

## Bulk Miximg Event

The CRMTP bulk mixing event represents the blending of multiple sourced raw materials into one mixed consignment. It uses the `aggregation` event type with input as a list of identified raw products.

### Profile Rules

* list of rules 


### Working Sample

sample

## Smelting Event

smelting event represents the transformation of raw ore into concentrated product - transformation event..


