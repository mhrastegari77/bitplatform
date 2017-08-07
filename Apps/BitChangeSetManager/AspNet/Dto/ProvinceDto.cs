﻿using Bit.Model.Contracts;
using System;

namespace BitChangeSetManager.Dto
{
    public class ProvinceDto : IDtoWithDefaultGuidKey
    {
        public virtual Guid Id { get; set; }

        public virtual string Name { get; set; }

        public virtual long CitiesCount { get; set; }
    }
}