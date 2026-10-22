// Question bank. Add your own questions to RAW.
// Format: [topicKey, question, [[optionText, explanation], ...], correctIndex]
// Start each explanation with "Right:" or "Wrong:". All questions here are original.
const T = {
  cloud: "Cloud concepts",
  arch: "Core architecture",
  comp: "Compute & networking",
  stor: "Storage & identity",
  gov: "Cost & governance",
  sec: "Security & monitoring",
};
const RAW = [
  [
    "cloud",
    "A shop’s site gets 20× traffic on sale day, then drops back. Which cloud benefit adds and removes capacity automatically?",
    [
      [
        "Geo-distribution",
        "Wrong: this means deploying close to users worldwide, not matching capacity to demand.",
      ],
      [
        "Elasticity",
        "Right: elasticity scales resources out and in automatically as demand changes, so you pay only for what you use.",
      ],
      [
        "Fault tolerance",
        "Wrong: this keeps a service running when a component fails. It doesn’t resize capacity.",
      ],
      [
        "Predictable cost",
        "Wrong: this is about forecasting spend, not reacting to load.",
      ],
    ],
    1,
  ],
  [
    "cloud",
    "In the shared responsibility model, who patches the guest operating system of a virtual machine (IaaS)?",
    [
      [
        "Always the cloud provider",
        "Wrong: the provider secures the physical host and fabric, not what runs inside your VM.",
      ],
      [
        "The customer",
        "Right: with IaaS you manage the guest OS, apps and data. The provider handles hardware, network and datacenter.",
      ],
      [
        "Both equally",
        "Wrong: responsibility is split by layer, not 50/50, and the OS layer sits with you in IaaS.",
      ],
      [
        "No one, it’s automatic",
        "Wrong: patching isn’t automatic unless you configure it.",
      ],
    ],
    1,
  ],
  [
    "cloud",
    "A company stops buying servers and pays a monthly bill for what it uses. Spending shifts from…",
    [
      ["OpEx to CapEx", "Wrong: this is the reverse direction."],
      [
        "CapEx to OpEx",
        "Right: upfront capital purchases become ongoing, consumption-based operating costs.",
      ],
      ["Fixed to hybrid", "Wrong: these aren’t cost categories."],
      [
        "Variable to fixed",
        "Wrong: consumption pricing makes cost more variable, not fixed.",
      ],
    ],
    1,
  ],
  [
    "cloud",
    "An organization wants to host its applications in a cloud environment but must retain complete ownership and control over the physical hardware due to strict legal compliance. Which deployment model should they use?",
    [
      [
        "Public cloud",
        "Wrong: Public cloud infrastructure is entirely owned, operated, and maintained by a third-party cloud provider over the public internet.",
      ],
      [
        "Private cloud",
        "Right: Private cloud provides exclusive use to a single organization. It can be hosted in their own on-premises datacenter, giving them total control over hardware and security.",
      ],
      [
        "Hybrid cloud",
        "Wrong: Hybrid cloud blends public and private clouds, meaning part of the infrastructure would still reside on shared public cloud hardware.",
      ],
    ],
    1,
  ],
  [
    "arch",
    "What is an availability zone?",
    [
      [
        "A paired region hundreds of miles away",
        "Wrong: that describes a region pair.",
      ],
      [
        "A billing boundary for subscriptions",
        "Wrong: billing uses subscriptions, not zones.",
      ],
      [
        "One or more datacenters in a region with independent power, cooling and networking",
        "Right: zones protect against a single datacenter failure inside a region.",
      ],
      [
        "A virtual network segment",
        "Wrong: subnets segment networks, which is unrelated to physical datacenter groups.",
      ],
    ],
    2,
  ],
  [
    "arch",
    "You want one container for resources that share the same lifecycle, so you can delete them together. Which do you use?",
    [
      [
        "Management group",
        "Wrong: it organizes multiple subscriptions for policy and access.",
      ],
      [
        "Subscription",
        "Wrong: it’s a billing and access boundary, usually too broad for one lifecycle.",
      ],
      [
        "Resource group",
        "Right: a resource group holds related resources, and deleting it removes everything inside.",
      ],
      [
        "Availability set",
        "Wrong: it spreads VMs across fault domains and isn’t a container for management.",
      ],
    ],
    2,
  ],
  [
    "arch",
    "What is the main benefit of Azure region pairs?",
    [
      [
        "Cheaper data transfer between any two regions",
        "Wrong: pricing isn’t the purpose.",
      ],
      [
        "Planned updates are sequenced, and one region is prioritized for recovery in a wide outage",
        "Right: pairs support disaster recovery and reduce the chance both regions are updated at once.",
      ],
      [
        "Automatic merging of two subscriptions",
        "Wrong: pairs are about regions, not subscriptions.",
      ],
      ["Free unlimited storage", "Wrong: pairing has no free-storage effect."],
    ],
    1,
  ],
  [
    "arch",
    "You need to organize resources across multiple Azure subscriptions to ensure uniform access controls, policies, and compliance boundaries are inherited downward. What organizational element should you use?",
    [
      [
        "Resource Groups",
        "Wrong: Resource groups live inside a single subscription and cannot span across multiple subscriptions.",
      ],
      [
        "Management Groups",
        "Right: Management groups provide a level of scope above subscriptions. Subscriptions placed within a management group automatically inherit the conditions applied to it.",
      ],
      [
        "Azure Blueprints",
        "Wrong: Blueprints are used to deploy repeatable environments, not to hierarchically organize subscriptions.",
      ],
    ],
    1,
  ],
  [
    "comp",
    "You need code to run when a file lands in storage, with no servers to manage. Best fit?",
    [
      [
        "Azure Functions",
        "Right: serverless, event-driven compute that you pay for per execution.",
      ],
      [
        "Virtual Machines",
        "Wrong: you’d manage the OS and pay while it runs, which is more than needed.",
      ],
      ["Azure Virtual Desktop", "Wrong: it delivers remote desktops to users."],
      ["Azure DNS", "Wrong: it resolves names and doesn’t run code."],
    ],
    0,
  ],
  [
    "comp",
    "Which service gives you full control of the operating system for a lift-and-shift of a legacy app?",
    [
      [
        "Azure Functions",
        "Wrong: you can’t control the OS in a serverless model.",
      ],
      [
        "Azure Virtual Machines",
        "Right: IaaS VMs let you pick and configure the OS and install anything the app needs.",
      ],
      [
        "Azure App Service",
        "Wrong: it’s a managed platform, so OS control is limited.",
      ],
      [
        "Azure Blob Storage",
        "Wrong: it stores data and doesn’t run applications.",
      ],
    ],
    1,
  ],
  [
    "comp",
    "Which service provides a private, dedicated connection from on-premises to Azure that doesn’t use the public internet?",
    [
      [
        "Site-to-site VPN",
        "Wrong: it’s encrypted, but it travels over the public internet.",
      ],
      [
        "Azure ExpressRoute",
        "Right: it uses a private connection through a connectivity provider, with more predictable latency.",
      ],
      [
        "Azure Bastion",
        "Wrong: it gives secure RDP/SSH to VMs from the portal.",
      ],
      [
        "Network security group",
        "Wrong: it filters traffic and doesn’t create connections.",
      ],
    ],
    1,
  ],
  [
    "comp",
    "Which Azure compute service allows you to run containerized applications directly on serverless infrastructure without needing to manage, patch, or configure virtual machines?",
    [
      [
        "Azure Virtual Machines",
        "Wrong: Virtual machines are IaaS resources that require you to manage the underlying operating system, patching, and configuration.",
      ],
      [
        "Azure Kubernetes Service (AKS)",
        "Wrong: AKS is a robust container orchestration engine that requires managing container clusters and nodes.",
      ],
      [
        "Azure Container Instances (ACI)",
        "Right: ACI is a lightweight, serverless container hosting platform that lets you run containers instantly without any virtual machine management overhead.",
      ],
    ],
    2,
  ],
  [
    "stor",
    "Where should you store millions of images and videos (unstructured data)?",
    [
      [
        "Azure Blob Storage",
        "Right: Blob storage is built for massive amounts of unstructured objects.",
      ],
      [
        "Azure Table storage",
        "Wrong: it holds structured NoSQL key-value data.",
      ],
      ["Azure Queue storage", "Wrong: it passes messages between components."],
      [
        "Azure SQL Database",
        "Wrong: it’s relational, which is a poor fit for large media files.",
      ],
    ],
    0,
  ],
  [
    "stor",
    "Which redundancy option keeps copies in separate availability zones within one region?",
    [
      ["LRS", "Wrong: LRS keeps all copies in a single datacenter."],
      [
        "ZRS",
        "Right: zone-redundant storage spreads copies across zones, so it survives a datacenter failure.",
      ],
      [
        "Archive tier",
        "Wrong: that’s an access tier for cold data, not a redundancy setting.",
      ],
      ["Premium SKU", "Wrong: this describes performance, not copy placement."],
    ],
    1,
  ],
  [
    "stor",
    "A user signs in with a password and then approves a prompt on their phone. What is this?",
    [
      [
        "Single sign-on",
        "Wrong: SSO lets one sign-in access many apps. It isn’t a second factor.",
      ],
      [
        "Conditional Access",
        "Wrong: this is a policy engine that can require MFA.",
      ],
      [
        "Multifactor authentication",
        "Right: MFA combines two or more kinds of proof, such as something you know and something you have.",
      ],
      ["Federation", "Wrong: it connects separate identity systems."],
    ],
    2,
  ],
  [
    "stor",
    "You need to store long-term archival data that is rarely accessed. The data must be stored at the lowest possible cost, and you can tolerate a data retrieval latency of up to several hours. Which Blob storage access tier fits this requirement?",
    [
      [
        "Hot tier",
        "Wrong: The Hot tier has the highest storage costs and lowest access costs, optimized for frequently accessed data.",
      ],
      [
        "Cool tier",
        "Wrong: The Cool tier is for infrequently accessed data stored for at least 30 days, offering faster retrieval times than Archive but at a higher storage cost.",
      ],
      [
        "Archive tier",
        "Right: The Archive tier has the lowest storage costs but highest retrieval costs and latency, making it ideal for data that can wait hours to be rehydrated.",
      ],
    ],
    2,
  ],
  [
    "gov",
    "Which tool estimates the monthly cost of resources you plan to deploy?",
    [
      [
        "Azure Pricing calculator",
        "Right: you choose services and sizes to get an estimate before you deploy.",
      ],
      [
        "Azure Advisor",
        "Wrong: it recommends improvements for existing resources.",
      ],
      ["Service Health", "Wrong: it reports Azure incidents and maintenance."],
      [
        "Azure Monitor",
        "Wrong: it collects telemetry and doesn’t estimate prices.",
      ],
    ],
    0,
  ],
  [
    "gov",
    "What does Azure Policy do?",
    [
      [
        "Grants users permissions to resources",
        "Wrong: that’s role-based access control.",
      ],
      [
        "Evaluates resources against rules and can block or flag non-compliant ones",
        "Right: for example, it can allow only certain regions or require tags.",
      ],
      [
        "Encrypts data at rest",
        "Wrong: encryption is a service feature, not Policy’s job.",
      ],
      [
        "Bills departments separately",
        "Wrong: cost reporting uses Cost Management.",
      ],
    ],
    1,
  ],
  [
    "gov",
    "You want to stop anyone from accidentally deleting a critical database, even people with Owner rights. Use…",
    [
      [
        "A resource lock (Delete)",
        "Right: locks override permissions and block the action until the lock is removed.",
      ],
      ["A tag", "Wrong: tags label resources and don’t prevent actions."],
      ["A larger SKU", "Wrong: size doesn’t affect delete protection."],
      ["Azure Advisor", "Wrong: it only offers recommendations."],
    ],
    0,
  ],
  [
    "gov",
    "Your company wants to ensure that developers can only deploy virtual machines in specific geographic regions to comply with local data sovereignty laws. Which feature handles this restriction?",
    [
      [
        "Azure Role-Based Access Control (RBAC)",
        "Wrong: RBAC governs *who* has permission to manage resources, not *what* configurations or rules those resources must follow.",
      ],
      [
        "Azure Policy",
        "Right: Azure Policy enforces rules and compliance standards over your resources, such as explicitly restricting allowed deployment regions.",
      ],
      [
        "Azure Resource Locks",
        "Wrong: Resource locks prevent resources from being accidentally deleted or modified, but they cannot restrict where new resources are created.",
      ],
    ],
    1,
  ],
  [
    "sec",
    "Which service collects and analyzes metrics and logs to help you spot and troubleshoot issues?",
    [
      [
        "Azure Monitor",
        "Right: it gathers telemetry from Azure and on-premises resources and supports alerts and dashboards.",
      ],
      [
        "Azure Policy",
        "Wrong: it governs configuration and doesn’t analyze performance.",
      ],
      ["Azure Lighthouse", "Wrong: it supports managing multiple tenants."],
      [
        "Azure Blueprints",
        "Wrong: it packages governance artifacts for repeatable setups.",
      ],
    ],
    0,
  ],
  [
    "sec",
    "Which service shows your security posture and helps protect workloads from threats across Azure and hybrid environments?",
    [
      [
        "Microsoft Defender for Cloud",
        "Right: it gives security recommendations plus threat protection.",
      ],
      ["Azure Cost Management", "Wrong: it’s focused on spend."],
      [
        "Azure Service Health",
        "Wrong: it tracks platform incidents, not your security posture.",
      ],
      [
        "Azure Arc",
        "Wrong: it extends management to other environments, but it isn’t a security posture tool.",
      ],
    ],
    0,
  ],
  [
    "sec",
    "Give a colleague read-only access to everything in one resource group, with no more access than needed. What do you do?",
    [
      [
        "Make them subscription Owner",
        "Wrong: that grants far too much and breaks least privilege.",
      ],
      [
        "Assign the Reader role at the resource group scope",
        "Right: RBAC applies a role at a scope, and Reader allows viewing but not changes.",
      ],
      [
        "Share your own password",
        "Wrong: never share credentials, and it removes accountability.",
      ],
      [
        "Apply a resource lock",
        "Wrong: locks restrict actions on resources and don’t grant access to people.",
      ],
    ],
    1,
  ],
  [
    "sec",
    "Your security team needs a cloud-native Security Information and Event Management (SIEM) system to aggregate security logs, detect threats, and orchestrate automated responses across your entire Azure footprint. Which service should you deploy?",
    [
      [
        "Azure Monitor",
        "Wrong: Azure Monitor tracks performance and telemetry data, but it is not a dedicated SIEM/SOAR threat detection system.",
      ],
      [
        "Microsoft Sentinel",
        "Right: Microsoft Sentinel is Azure's cloud-native SIEM and SOAR solution that provides intelligent security analytics and threat intelligence across the enterprise.",
      ],
      [
        "Microsoft Defender for Cloud",
        "Wrong: Defender for Cloud provides cloud security posture management (CSPM) and workload protection, but Sentinel acts as the centralized SIEM analyzer.",
      ],
    ],
    1,
  ],
];
