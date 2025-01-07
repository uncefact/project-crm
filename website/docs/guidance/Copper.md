---
sidebar_position: 10
title: Copper 
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Copper Value Chain

The copper value chain shown below indicates which role(s) are expected to **issue** which CRMTP credential types. 

diagram goes here

Any actor that has an identifier of a copper product, minsite, or refinery can find the issued credentials and verify them.  In general, downstream actors will be verifiers of upstream credentials. 

## Implementation Guidance

Each implementer role should follow links to the relevant credential specifications and ensure that they are issuing credentials according to the relevant specification. In most cases the technical implementation will be done by underlying [software](../register/Software) systems. However it is still important that each actor confirm that the AATP credentials issued by their chosen systems are valid by dropping them into the [conformity testing](Testing) service. 

|Role|Issuer of|Comments|
|--|--|--|
|Mine site|Copper passport|comments |
|Certifier |CopperMark credential| |
|Regulator|Mine Permit| |
|etc| | |


## Identity Anchors

Identity anchors add increased trust to the CRMTP ecosystem because they link the DIDs (Self-issued IDs) of actors such as miners and refiners to authoritative registers such as Business registers. They are very simple credentials and are simple to issue. Their purpose and detailed implementation guidance are provided in the UNTP [Digital Identity Anchor (DIA)](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor) specification.  The DIA is mapped to CRMTP identifiers in the [Identifiers](../specification/Identifiers) section of this website. The table below lists the specific identity anchors relevant for actors in the industry. Each actor SHOULD request the corresponding identity credential from their registrar and should make it discoverable by 

* linking it to their DID `serviceEndpoint` as described in [DIA DID discovery](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor#via-did-service-endpoint)
* adding it to their registry entry as a link type as described in [DIA Resolver Discovery](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor#via-identity-resolver)

These tasks will normally be facilitated by the registrar such as the national business register.

|Role|Identity Anchor Type|Comment|
|--|--|--|
| | | |


## Buyers (Retailers & Brands)


TBD







